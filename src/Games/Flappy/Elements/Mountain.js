import { GameElement } from 'game-reactor/lib';

export default class Mountain extends GameElement {
  constructor(game) {
    super(game, {
      name: 'mountain',
      sprite: 'mountain',
      state: {
        xPos: 0,
        xVelocity: 150,
      },
    });
  }

  onUpdate(game, lapse) {
    this.state.xPos -= ((lapse / 1000) * this.state.xVelocity);
    if (this.state.xPos <= -150) {
      this.state.xPos = 350;
    }
  }

  onDraw(game) {
    game.viewport.drawElement(this, {
      pos: { x: this.state.xPos, y: 200 },
    });
  }
}
