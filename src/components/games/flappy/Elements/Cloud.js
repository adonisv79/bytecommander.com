import { GameElement } from './../GR';

export default class Cloud extends GameElement {
  constructor(game) {
    super(game, {
      name: 'cloud',
      sprite: 'cloud',
      pos: { x: 0, y: 100 },
      state: {
        xVelocity: 100,
      },
    });
  }

  onUpdate(game, lapse) {
    this.XPos -= ((lapse / 1000) * this.State.xVelocity);
    if (this.XPos <= -100) {
      this.XPos = 150;
    }
  }

  onDraw(game) {
    game.viewport.drawElement(this, {
      pos: { x: this.XPos, y: this.YPos },
    });
    game.viewport.drawElement(this, {
      pos: { x: this.XPos + 250, y: this.YPos },
    });
  }
}
