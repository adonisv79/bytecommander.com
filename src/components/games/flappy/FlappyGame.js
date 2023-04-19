import { Game } from './GR';
import Sky from './Elements/Sky';
import Bird from './Elements/Bird';
import Ship from './Elements/Ship';
import Mountain from './Elements/Mountain';
import Cloud from './Elements/Cloud';
import Road from './Elements/Road';
import Glider from './Elements/Glider';
import Watermark from './Elements/Watermark';
import Coin from './Elements/Coin';

let self;
let sky;
let bird;
let ship;
let mountain;
let cloud;
let road;
let glider;
let watermark;
let coin;
let text;
let bgMusic;
let jumpSound;

export default class FlappyGame extends Game {
  constructor() {
    super({
      name: 'flappybird',
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
    self = this;
    self.Sounds.addSource('jump', '/sounds/games/flappy/jump.mp3')
    self.Sounds.addSource('bgmusic', '/sounds/games/flappy/linamnam_ulam.mp3')
    self.fonts.add('notice', {
      family: 'Flappy', size: '22px', color: '#f43', stroke_width: 1, stroke_color: '#fc1',
    });
    self.fonts.add('score', {
      family: 'Flappy', size: '16px', color: '#4f3', stroke_width: 1, stroke_color: '#040',
    });
    self.fonts.add('combo', {
      family: 'Flappy', size: '16px', color: '#fff', stroke_width: 1, stroke_color: '#000',
    });
    self.fonts.add('missed', {
      family: 'Flappy', size: '14px', color: '#f00', stroke_width: 1, stroke_color: '#fff',
    });
  }

  onReady() {
    self.addSprites();
    sky = new Sky(self);
    cloud = new Cloud(self);
    mountain = new Mountain(self);
    road = new Road(self);
    bird = new Bird(self);
    ship = new Ship(self);
    glider = new Glider(self);
    coin = new Coin(self);
    watermark = new Watermark(self);
  }

  onDisengaged() {
    self.Sounds.stop();
  }

  addSprites() {
    self.Sprites.addSource('background-sky', '/images/games/flappy/background.png');
    self.Sprites.addSource('bird', '/images/games/flappy/flappy.png');
    self.Sprites.addSource('jollibee', '/images/games/flappy/jollibee.png');
    self.Sprites.addSource('mountain', '/images/games/flappy/mountain.png');
    self.Sprites.addSource('road', '/images/games/flappy/road.png');
    self.Sprites.addSource('cloud', '/images/games/flappy/cloud1.png');
    self.Sprites.addSource('ship', '/images/games/flappy/ship_medium.png');
    self.Sprites.addSource('glider', '/images/games/flappy/hangglider.png');
    self.Sprites.addSource('watermark', '/images/games/flappy/morefun.png');
    self.Sprites.addSource('coin', '/images/games/flappy/coin.png');
  }

  startNewGame() {
    self.Sounds.stop(); //ensure to clear playing sounds
    self.State.score = 0;
    self.State.combo = 0;
    self.State.comboBonus = 0;
    bird.reset();
    ship.reset()
    glider.reset();
    coin.reset();
    self.Sounds.play('bgmusic');
    self.state.isPlaying = true;
  }

  gameUpdate(lapse) {
    if (self.state.isPlaying) {
      self.elements.update(lapse);
    }
  }

  gameDraw(lapse, sysPerf) {
    if (self.viewport.CanvasRef) {
      self.elements.redraw(lapse);
      if (this.config.viewport.showPerfStats) {
        self.viewport.drawText(self.state.mouseButtonMsg, { x: 10, y: 240 });
        self.viewport.drawText(`Frame: ${sysPerf.frameNumber}/${this.config.viewport.fps}`, { x: 260, y: 240 });
      }

      self.viewport.drawText(`SCORE: ${ self.State.score}`, { x: 10, y: 10 }, 'score');
      self.viewport.drawText(`COMBO: ${ self.State.combo}`, { x: 210, y: 10 }, 'combo');
      self.viewport.drawText(`BONUS: +${ self.State.comboBonus}`, { x: 210, y: 30 }, 'combo');
      if (!this.state.isPlaying) {
        self.viewport.drawText('Touch screen', { x: 80, y: 120 }, 'notice');
        self.viewport.drawText('to start...', { x: 110, y: 150 }, 'notice');
      }
    }
  }

  onMouseDown(e) {
    if (self.state.isPlaying) {
      this.state.mouseButtonMsg = `Clicked MouseBtn(${e.button}) on ${e.x}:${e.y}`;
      bird.jump();
    } else {
      self.startNewGame();
    }
  }
}