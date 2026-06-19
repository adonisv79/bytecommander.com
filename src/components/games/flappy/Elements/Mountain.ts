import { Game, GameElement } from "game-reactor/dist";

export default class Mountain extends GameElement {
  constructor(game: Game) {
    super(game.Logger, {
      name: 'mountain',
      sprite: 'mountain',
      pos: { x: 0, y: 200 }
    }, {
      xVelocity: 75,
    });
  }

  onUpdate(game: Game, timeDelta: number) {
    this.Config.pos!.x -= this.State.xVelocity * timeDelta;
    if (this.Config.pos!.x <= -150) {
      this.Config.pos!.x = 350;
    }
  }

  onDraw(game: Game) {
    game.Viewport.drawElement(this);
  }
}
