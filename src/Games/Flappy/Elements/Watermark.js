// import { GameElement } from 'game-reactor/lib';
import { GameElement } from './../GR';

export default class Watermark extends GameElement {
  constructor(game) {
    super(game, {
      name: 'watermark',
      sprite: 'watermark', // add on component mount
      pos: { x: 250, y: 190 },
      state: {},
    });
  }

  onUpdate() {
    // do nothing
  }

  onDraw(game) {
    game.viewport.drawElement(this);
  }
}
