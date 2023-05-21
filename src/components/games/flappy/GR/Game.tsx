import React, { ReactElement, useEffect } from 'react';
import GameViewport, { ViewPortConfig } from './GameViewport';
import SpriteManager from './SpriteManager';
import GameElementManager from './GameElementManager';
import GameFontManager from './GameFontManager';
import SoundMixer from './SoundMixer';
import GameLog, { GameLogLevels } from './GameLog';

const BRAND_ID = 'ALV-GAME-REACTOR';
const LOG_LEVEL = GameLogLevels.info;
let self: Game;
let gameLoopInterval: ReturnType<typeof setTimeout>;

export enum GameMouseButtons {
  unknown, left, right, middle, back, forward
}

export interface GameMouseEvent {
  button: GameMouseButtons,
  withCtrlKey: boolean,
  withAltKey: boolean,
  withMetaKey: boolean,
  withShiftKey: boolean,
  x: number,
  y: number,
}

function generateCanvsMouseEvent(e: React.MouseEvent): GameMouseEvent {
  let button = GameMouseButtons.unknown;
  if (e.button === 0 || e.buttons === 1) {
    button = GameMouseButtons.left;
  } else if (e.button === 2 || e.buttons === 2) {
    button = GameMouseButtons.right;
  } else if (e.button === 1 || e.buttons === 4) {
    button = GameMouseButtons.middle;
  } else if (e.button === 3 || e.buttons === 8) {
    button = GameMouseButtons.back;
  } else if (e.button === 4 || e.buttons === 16) {
    button = GameMouseButtons.forward;
  }
  return {
    button,
    withCtrlKey: e.ctrlKey,
    withAltKey: e.altKey,
    withMetaKey: e.metaKey,
    withShiftKey: e.shiftKey,
    x: Math.ceil(e.clientX - self.viewport.PagePosition.left),
    y: Math.ceil(e.clientY - self.viewport.PagePosition.top),
  };
}

function canvasClicked(e: React.MouseEvent) {
  e.preventDefault();
  if (self.onMouseClick) {
    self.onMouseClick(generateCanvsMouseEvent(e));
  }
}

function canvasMouseDown(e: React.MouseEvent) {
  e.preventDefault();
  if (self.onMouseDown) {
    self.onMouseDown(generateCanvsMouseEvent(e));
  }
}

function canvasMouseUp(e: React.MouseEvent) {
  e.preventDefault();
  if (self.onMouseUp) {
    self.onMouseUp(generateCanvsMouseEvent(e));
  }
}

function canvasContextMenu(e: React.MouseEvent) {
  // this is to rid of that windows context menu appearing when we click the right mouse button.
  return e.preventDefault();
}

function canvasFocusLost() {
  self.state.isPlaying = false;
}

function canvasDoubleClicked(e: React.MouseEvent) {
  // this is to rid of that apple double tap zoom
  return e.preventDefault();
}

interface GameConfig {
  name: string,
  viewport: ViewPortConfig,
}

const DEFAULT_CONFIG = {
  name: 'Unnamed Game',
  viewport: {
    showCollisions: false,
    showPerfStats: false,
    fps: 30,
    width: 360,
    height: 270,
  },
};

export default abstract class Game {
  elements: GameElementManager;
  config: GameConfig;
  viewport: GameViewport;
  state: any;
  fonts: GameFontManager;
  sounds: SoundMixer;
  sprites: SpriteManager;
  instanceID: number;
  logger: GameLog;

  constructor(config: GameConfig, state: any) {
    this.instanceID = Math.round(Math.random() * 1000)
    this.logger = new GameLog(this, LOG_LEVEL);
    this.logger.info('Initializing game instance...');
    this.state = state;
    this.config = { ...DEFAULT_CONFIG, ...config };
    this.viewport = new GameViewport(this);
    this.elements = new GameElementManager(this);
    this.fonts = new GameFontManager(this);
    this.sounds = new SoundMixer(this);
    this.sprites = new SpriteManager(this);
    self = this;
  }

  abstract onReady(): void;
  abstract onDisengaged(): void;

  onComponentMount() {
    self.logger.info('Game component mounted!')
    if (gameLoopInterval !== null) {
      clearInterval(gameLoopInterval);
    }

    this.onReady();
    this.sounds.onReady();
    this.startGameLoop();
  }

  onComponentUnmount() {
    this.logger.info('Game component unmounted!')
    if (gameLoopInterval) { // kill old interval
      clearInterval(gameLoopInterval);
    }
    this.sounds.stop();
    this.onDisengaged();
  }

  get ShowCollisions() { return this.config.viewport.showCollisions; }

  get Name() {
    return this.config.name;
  }

  get State() {
    return self.state;
  }

  abstract onDraw(lapse: number, sysPerf: any): void;
  abstract onUpdate(lapse: number): void;

  // My style of a basic game loop :p
  startGameLoop() {
    let frameNumber = 1;
    let nextFrame = (1000 / self.config.viewport.fps) * frameNumber;
    let secondCounter = 0;
    let prev = new Date().getTime();
    let current = prev;
    let lapse = 0;
    if (gameLoopInterval) { // kill old interval
      clearInterval(gameLoopInterval);
    }
    gameLoopInterval = setInterval(() => {
      current = new Date().getTime();
      lapse = current - prev;
      secondCounter += lapse;
      if (secondCounter > nextFrame) {
        self.onUpdate(lapse);
        self.onDraw(lapse, { frameNumber });
        frameNumber += 1;
        nextFrame = (1000 / self.config.viewport.fps) * frameNumber;
      }
      if (secondCounter > 1000) { // reset counters on 1 second mark
        secondCounter -= 1000;
        frameNumber = 1;
        nextFrame = (1000 / self.config.viewport.fps) * frameNumber;
      }
      prev = current;
    }, 10);

  }

  // User action or events
  onMouseClick?(e: GameMouseEvent) { }
  onMouseDown?(e: GameMouseEvent) { }
  onMouseUp?(e: GameMouseEvent) { }
}

export function GameElement(game: Game): ReactElement {
  useEffect(() => {
    game.onComponentMount();
    return () => {
      if (game.onComponentUnmount) game.onComponentUnmount();
    }
  });

  return (
    <div className='bg-gray-700'>
      <canvas
        id={`${BRAND_ID}_viewport`}
        ref={game.viewport.CanvasRef}
        height={game.config.viewport.height}
        width={game.config.viewport.width}
        onContextMenu={canvasContextMenu}
        onMouseDown={canvasMouseDown}
        onMouseUp={canvasMouseUp}
        onClick={canvasClicked}
        onBlur={canvasFocusLost}
        onDoubleClick={canvasDoubleClicked}
      >
        Canvas not supported by browser
      </canvas>
      {self.sprites.render()}
    </div>
  );
}
