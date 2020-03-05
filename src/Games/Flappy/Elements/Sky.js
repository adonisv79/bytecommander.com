import GameElement from '../adon-game-reactor/GameElement';

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
    game.viewport.drawElement(this, {
      pos: { x: 0, y: 0 },
    });
  }
}
