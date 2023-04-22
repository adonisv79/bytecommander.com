import Game from "../GR/Game";
import GameElement from "../GR/GameElement";

export default class Cloud extends GameElement {
  constructor(game: Game) {
    super(game, {
      name: 'cloud',
      sprite: 'cloud',
      pos: { x: 0, y: 100 },
      state: {
        xVelocity: 100,
      },
    });
  }

  onUpdate(game: Game, lapse: number) {
    this.Config.pos.x -= ((lapse / 1000) * (this.Config.state?.xVelocity || 0));
    if (this.Config.pos.x <= -100) {
      this.Config.pos.x = 150;
    }
  }

  onDraw(game: Game) {
    game.viewport.drawElement(this, {
      x: this.Config.pos.x, y: this.Config.pos.y
    });
    game.viewport.drawElement(this, {
      x: this.Config.pos.x + 250, y: this.Config.pos.y
    });
  }
}
