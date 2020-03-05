import GameElement from '../adon-game-reactor/GameElement';

export default class Cloud extends GameElement {
  constructor(game) {
    super(game, {
      name: 'cloud',
      sprite: 'cloud',
      state: {
        xPos: 0,
        xVelocity: 100,
      },
    });
  }

  onUpdate(game, lapse) {
    this.state.xPos -= ((lapse / 1000) * this.state.xVelocity);
    if (this.state.xPos <= -100) {
      this.state.xPos = 150;
    }
  }

  onDraw(game) {
    game.viewport.drawElement(this, {
      pos: { x: this.state.xPos, y: 100 },
    });
    game.viewport.drawElement(this, {
      pos: { x: this.state.xPos + 250, y: 100 },
    });
  }
}
