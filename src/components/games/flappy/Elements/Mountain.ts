import Game from '../GR/Game';
import GameElement from '../GR/GameElement';

export default class Mountain extends GameElement {
  constructor(game: Game) {
    super(game, {
      name: 'mountain',
      sprite: 'mountain',
      pos: { x: 0, y: 200 },
      state: {
        xVelocity: 150,
      },
    });
  }

  onUpdate(game: Game, lapse: number) {
    this.Config.pos.x -= ((lapse / 1000) * this.Config.state.xVelocity);
    if (this.Config.pos.x <= -150) {
      this.Config.pos.x = 350;
    }
  }

  onDraw(game: Game) {
    game.viewport.drawElement(this);
  }
}
