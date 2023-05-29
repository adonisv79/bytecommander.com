import { Game, GameElement } from "game-reactor/dist";

export default class Cloud extends GameElement {
  constructor(game: Game) {
    super(game.Logger, {
      name: 'cloud',
      sprite: 'cloud',
      pos: { x: 0, y: 100 }
    }, {
      xVelocity: 50,
    });
  }

  onUpdate(game: Game, timeDelta: number) {
    this.Config.pos!.x -= (this.State.xVelocity || 0) * timeDelta;
    if (this.Config.pos!.x <= -100) {
      this.Config.pos!.x = 150;
    }
  }

  onDraw(game: Game) {
    game.Viewport.drawElement(this, {
      x: this.Config.pos!.x, y: this.Config.pos!.y
    });
    game.Viewport.drawElement(this, {
      x: this.Config.pos!.x + 250, y: this.Config.pos!.y
    });
  }
}
