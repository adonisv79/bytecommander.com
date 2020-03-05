import React, { Component } from 'react';
import Viewport from './GameViewport';
import SpriteManager from './SpriteManager';
import GameElementManager from './GameElementManager';
const BRAND_ID = 'ALV-GAME-REACTOR';
let self;

export default class Game extends Component {
  constructor(config, state) {
    super();
    const DEFAULT_CONFIG = {
      name: 'Unnamed Game',
      viewport: {
        showPerfStats: false,
        fps: 30,
        width: 360,
        height: 270,
      },
    };
    self = this;
    self.config = { ...DEFAULT_CONFIG, ...config };
    self.state = state;
    self.viewport = new Viewport(self);
    self.elements = new GameElementManager(self);
    self.sprites = new SpriteManager(self);
  }

  componentDidMount() {
    const refId = `alv-game-canvas_${self.name}`;
    self.viewport.canvas = self.refs[refId];
    self.state.gameLoopInterval = null;
    self.startGameLoop();
  }

  componentWillUnmount() {
    if (self.state.gameLoopInterval) { // kill old interval
      clearInterval(self.state.gameLoopInterval);
    }
  }

  get name() {
    return this.config.name;
  }

  screenClicked(e) {
    if (self.onClick && typeof self.onClick !== 'function') {
      throw new Error('Game.onClick method is not a valid function');
    } else if (self.onClick) {
      self.onClick({
        x: Math.ceil(e.clientX - self.viewport.pagePosition.left),
        y: Math.ceil(e.clientY - self.viewport.pagePosition.top),
      });
    }
  }

  // My style of a basic game loop :p
  startGameLoop() {
    let frameNumber = 1;
    let nextFrame = (1000 / self.config.viewport.fps) * frameNumber;
    let secondCounter = 0;
    let prev = new Date().getTime();
    let current = prev;
    let lapse = 0;
    if (self.state.gameLoopInterval) { // kill old interval
      clearInterval(self.state.gameLoopInterval);
    }
    self.state.gameLoopInterval = setInterval(() => {
      current = new Date().getTime();
      lapse = current - prev;
      secondCounter += lapse;
      if (secondCounter > nextFrame) {
        self.gameUpdate(lapse);
        self.gameDraw(lapse, { frameNumber });
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

  render() {
    const refId = `alv-game-canvas_${self.name}`;
    return (
      <div>
        <canvas
          id={`${BRAND_ID}_viewport`}
          ref={refId}
          height={self.config.viewport.height}
          width={self.config.viewport.width}
          onClick={self.screenClicked}
        >
          Canvas not supported by browser
        </canvas>
        {self.sprites.render()}
      </div>
    );
  }
}