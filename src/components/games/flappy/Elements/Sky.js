import { GameElement } from './../GR';

export default class Sky extends GameElement {
  constructor(game) {
    super(game, {
      name: 'sky-bg',
      sprite: 'background-sky',
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
