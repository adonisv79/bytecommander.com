import { Game, GameElement } from "game-reactor/dist";

export default class Road extends GameElement {
  constructor(game: Game) {
    super(game.Logger, {
      name: 'road',
      sprite: 'road',
      pos: { x: 0, y: 220 }
    }, {
      xVelocity: 150,
    });
  }

  onUpdate(game: Game, timeDelta: number) {
    this.Config.pos!.x -= this.State.xVelocity * timeDelta;
    if (this.Config.pos!.x <= -120) {
      this.Config.pos!.x = 0;
    }
  }

  onDraw(game: Game) {
    game.Viewport.drawElement(this, {
      x: this.Config.pos!.x, y: this.Config.pos!.y
    });
    game.Viewport.drawElement(this, {
      x: this.Config.pos!.x + 120, y: this.Config.pos!.y
    });
    game.Viewport.drawElement(this, {
      x: this.Config.pos!.x + 240, y: this.Config.pos!.y
    });
    game.Viewport.drawElement(this, {
      x: this.Config.pos!.x + 360, y: this.Config.pos!.y
    });
  }
}
