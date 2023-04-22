import Game from '../GR/Game';
import GameElement from '../GR/GameElement';

export default class Sky extends GameElement {
  constructor(game: Game) {
    super(game, {
      name: 'sky-bg',
      sprite: 'background-sky',
      state: {},
      pos: {
        x: 0,
        y: 0,
      }
    });
  }

  onUpdate() {
    // do nothing
  }

  onDraw(game: Game) {
    game.viewport.drawElement(this);
  }
}
