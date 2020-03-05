import Game from './adon-game-reactor';
import Sky from './Elements/Sky';
import Bird from './Elements/Bird';
import Ship from './Elements/Ship';
import Mountain from './Elements/Mountain';
import Cloud from './Elements/Cloud';
import Road from './Elements/Road';
import Glider from './Elements/Glider';
import Watermark from './Elements/Watermark';
let sky;
let bird;
let ship;
let mountain;
let cloud;
let road;
let glider;
let watermark;
let self;

export default class FlappyGame extends Game {
  constructor() {
    super({
      name: 'Flappy Bird PH Edition',
      viewport: {
        showPerfStats: true,
        fps: 30,
        width: 360,
        height: 270,
      },
    }, {
      isPlaying: false,
      updateLapse: 0,
    });
    self = this;
    sky = new Sky(self);
    cloud = new Cloud(self);
    mountain = new Mountain(self);
    road = new Road(self);
    bird = new Bird(self);
    ship = new Ship(self);
    glider = new Glider(self);
    watermark = new Watermark(self);
    self.addSprites();
    self.viewport.pens.notice = '30px Verdana';
  }

  addSprites() {
    self.sprites.add('background-sky', '/images/games/flappy/background.png');
    self.sprites.add('bird', '/images/games/flappy/flappy.png');
    self.sprites.add('mountain', '/images/games/flappy/mountain.png');
    self.sprites.add('road', '/images/games/flappy/road.png');
    self.sprites.add('cloud', '/images/games/flappy/cloud1.png');
    self.sprites.add('ship', '/images/games/flappy/ship_medium.png');
    self.sprites.add('glider', '/images/games/flappy/hangglider.png');
    self.sprites.add('watermark', '/images/games/flappy/morefun.png');
  }

  startNewGame() {
    bird.reset();
    ship.state.xPos = -140;
    glider.state.xPos = -100;
    self.state.isPlaying = true;
  }

  gameUpdate(lapse) {
    if (self.state.isPlaying) {
      self.elements.update(lapse);
    }
  }

  gameDraw(lapse, sysPerf) {
    self.elements.redraw(lapse);
    if (this.config.viewport.showPerfStats) {
      self.viewport.drawText(`Frame: ${sysPerf.frameNumber}/${this.config.viewport.fps}`, { x: 260, y: 20 });
    }
    if (!this.state.isPlaying) {
      self.viewport.drawText('Touch screen', { x: 80, y: 120 }, 'notice');
      self.viewport.drawText('to start...', { x: 110, y: 150 }, 'notice');
    }
  }

  onClick(e) {
    console.log(`user clicked on ${e.x}:${e.y}`)
    if (self.state.isPlaying) {
      bird.jump();
    } else {
      self.startNewGame();
    }
  }
}