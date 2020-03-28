import { Game } from 'game-reactor';
import BackgroundElement from './Elements/BackgroundElement'

let self;

export default class HelloGameReactor extends Game {
  constructor() {
    super({
      name: 'hellogame',
      viewport: {
        fps: 30,
        width: 360,
        height: 270,
      },
    }, {});
    self = this;
    const bg = new BackgroundElement(self);
    self.sprites.add('myfirstbg', 'https://www.zingerbug.com/Backgrounds/background_images/small_baby_blue_bricks_seamless_pattern.gif');
  }

  gameUpdate() {

  }

  gameDraw(lapse) {
    self.elements.redraw(lapse);
    self.viewport.drawText('Oh my GOD!! It works!!!', {x: 10, y: 10 });
    self.viewport.drawText('seriously!', {x: 20, y: 30 });
  }
}