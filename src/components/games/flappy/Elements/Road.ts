import Game from '../GR/Game';
import GameElement from '../GR/GameElement';

export default class Road extends GameElement {
  constructor(game: Game) {
    super(game, {
      name: 'road',
      sprite: 'road',
      pos: { x: 0, y: 220 },
      state: {
        xVelocity: 300,
      },
    });
  }

  onUpdate(game: Game, lapse: number) {
    this.Config.pos.x -= ((lapse / 1000) * this.Config.state.xVelocity);
    if (this.Config.pos.x <= -120) {
      this.Config.pos.x = 0;
    }
  }

  onDraw(game: Game) {
    game.viewport.drawElement(this, {
      x: this.Config.pos.x, y: this.Config.pos.y
    });
    game.viewport.drawElement(this, {
      x: this.Config.pos.x + 120, y: this.Config.pos.y
    });
    game.viewport.drawElement(this, {
      x: this.Config.pos.x + 240, y: this.Config.pos.y
    });
    game.viewport.drawElement(this, {
      x: this.Config.pos.x + 360, y: this.Config.pos.y
    });
  }
}
