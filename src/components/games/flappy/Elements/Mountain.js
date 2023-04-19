// import { GameElement } from 'game-reactor/lib';
import { GameElement } from './../GR';

export default class Mountain extends GameElement {
  constructor(game) {
    super(game, {
      name: 'mountain',
      sprite: 'mountain',
      pos: { x: 0, y: 200 },
      state: {
        xVelocity: 150,
      },
    });
  }

  onUpdate(game, lapse) {
    this.XPos -= ((lapse / 1000) * this.State.xVelocity);
    if (this.XPos <= -150) {
      this.XPos = 350;
    }
  }

  onDraw(game) {
    game.viewport.drawElement(this);
  }
}
