import { Game, GameElement } from "game-reactor/dist";

export default class Sky extends GameElement {
  constructor(game: Game) {
    super(game.Logger, {
      name: 'sky-bg',
      sprite: 'background-sky'
    });
  }

  onUpdate() {
    // do nothing
  }

  onDraw(game: Game) {
    game.Viewport.drawElement(this);
  }
}
