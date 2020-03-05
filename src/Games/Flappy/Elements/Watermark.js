import { GameElement } from 'game-reactor/lib';

export default class Watermark extends GameElement {
  constructor(game) {
    super(game, {
      name: 'watermark',
      sprite: 'watermark', // add on component mount
      state: {},
    });
  }

  onUpdate() {
    // do nothing
  }

  onDraw(game) {
    game.viewport.drawElement(this, {
      pos: { x: 250, y: 190 },
    });
  }
}
