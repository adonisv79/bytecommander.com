"use client"

import { Game, GameComponent, GameLogLevels, GameMouseEvent, SystemPerformance } from "game-reactor/dist";
import Sky from './Elements/Sky';
import Bird from './Elements/Bird';
import Ship from './Elements/Ship';
import Mountain from './Elements/Mountain';
import Cloud from './Elements/Cloud';
import Road from './Elements/Road';
import Glider from './Elements/Glider';
import Watermark from './Elements/Watermark';
import Coin from './Elements/Coin';
import { FC } from 'react';

let bird: Bird;
let ship: Ship;
let glider: Glider;
let coin: Coin;

export class FlappyGame extends Game {
  constructor() {
    super({
      name: 'flappybird',
      logLevel: GameLogLevels.debug,
      viewport: {
        //showCollisions: true,
        showPerfStats: true,
        fps: 30,
        width: 360,
        height: 270,
      },
    }, {
      isPlaying: false,
      score: 0,
      combo: 0,
      comboBonus: 0,
      updateLapse: 0,
      mouseButtonMsg: 'None',
    });

    this.Sounds.addSource('jump', '/sounds/games/flappy/jump.mp3', 0.05)
    this.Sounds.addSource('bgmusic', '/sounds/games/flappy/linamnam_ulam.mp3', 0.1, true)
    this.Fonts.add('notice', {
      family: 'Flappy', size: '24px', color: '#aa9', stroke_width: 1, stroke_color: '#d00',
    });
    this.Fonts.add('score', { family: 'Flappy', size: '18px', color: '#4f3' });
    this.Fonts.add('combo', { family: 'Flappy', size: '18px', color: '#fff' });
    this.Fonts.add('missed', { family: 'Flappy', size: '14px', color: '#000', stroke_width: 1, stroke_color: '#f00' });
    this.addSprites();
    this.addGameElements();
  }

  onReady() {
  }

  onDisengaged() {
    this.Sounds.stopAll();
  }

  addSprites() {
    this.Sprites.addSource('background-sky', '/images/games/flappy/background.png');
    this.Sprites.addSource('bird', '/images/games/flappy/flappy.png');
    this.Sprites.addSource('jollibee', '/images/games/flappy/jollibee.png');
    this.Sprites.addSource('mountain', '/images/games/flappy/mountain.png');
    this.Sprites.addSource('road', '/images/games/flappy/road.png');
    this.Sprites.addSource('cloud', '/images/games/flappy/cloud1.png');
    this.Sprites.addSource('ship', '/images/games/flappy/ship_medium.png');
    this.Sprites.addSource('glider', '/images/games/flappy/hangglider.png');
    this.Sprites.addSource('watermark', '/images/games/flappy/morefun.png');
    this.Sprites.addSource('coin', '/images/games/flappy/coin.png');
  }

  addGameElements() {
    this.Elements.add(new Sky(this));
    this.Elements.add(new Cloud(this));
    this.Elements.add(new Mountain(this));
    this.Elements.add(new Road(this));
    this.Elements.add(new Watermark(this));
    bird = new Bird(this);
    this.Elements.add(bird);
    ship = new Ship(this);
    this.Elements.add(ship);
    glider = new Glider(this);
    this.Elements.add(glider);
    coin = new Coin(this);
    this.Elements.add(coin);
  }

  startNewGame() {
    this.Sounds.stopAll(); //ensure to clear playing sounds
    this.State.score = 0;
    this.State.combo = 0;
    this.State.comboBonus = 0;
    bird.reset();
    ship.reset()
    glider.reset();
    coin.reset();
    this.Sounds.play('bgmusic');
    this.State.isPlaying = true;
  }

  onUpdate(timeDelta: number) {
    if (this.State.isPlaying) {
      this.Elements.update(this, timeDelta);
    }
  }

  onDraw(timeDelta: number, sysPerf: SystemPerformance) {
    if (this.Viewport.Canvas2DContext) {
      this.Viewport.clear();
      this.Elements.redraw(this, timeDelta);
      if (this.Config.viewport?.showPerfStats) {
        this.Viewport.drawText(this.State.mouseButtonMsg, { x: 10, y: 240 }, this.Fonts.get('default'));
        this.Viewport.drawText(`Frame: ${sysPerf.frameCurrent}/${this.Config.viewport.fps}`, { x: 260, y: 240 }, this.Fonts.get('default'));
      }

      this.Viewport.drawText(`SCORE: ${this.State.score}`, { x: 10, y: 10 }, this.Fonts.get('score'));
      this.Viewport.drawText(`COMBO: ${this.State.combo}`, { x: 210, y: 10 }, this.Fonts.get('combo'));
      this.Viewport.drawText(`BONUS: +${this.State.comboBonus}`, { x: 210, y: 30 }, this.Fonts.get('combo'));
      if (!this.State.isPlaying) {
        this.Viewport.drawText('Touch screen', { x: 80, y: 120 }, this.Fonts.get('notice'));
        this.Viewport.drawText('to start...', { x: 110, y: 150 }, this.Fonts.get('notice'));
      }
    }
  }

  onMouseDown(e: GameMouseEvent) {
    if (this.State.isPlaying) {
      this.State.mouseButtonMsg = `Clicked MouseBtn(${e.button}) on ${e.x}:${e.y}`;
      bird.jump(this);
    } else {
      this.startNewGame();
    }
  }
}

const FlappyGameComponent: FC = () => {
  const game = new FlappyGame()
  return <GameComponent id="Flappy" game={game} />
}

export default FlappyGameComponent;
