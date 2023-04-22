import Game from '../GR/Game';
import GameElement from '../GR/GameElement';

export default class Watermark extends GameElement {
  constructor(game: Game) {
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

  onDraw(game: Game) {
    game.viewport.drawElement(this);
  }
}
