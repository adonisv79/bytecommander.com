import { Game, GameElement } from "game-reactor/dist";

export default class Watermark extends GameElement {
  constructor(game: Game) {
    super(game.Logger, {
      name: 'watermark',
      sprite: 'watermark', // add on component mount
      pos: { x: 250, y: 190 }
    });
  }

  onUpdate() {
    // do nothing
  }

  onDraw(game: Game) {
    game.Viewport.drawElement(this);
  }
}
