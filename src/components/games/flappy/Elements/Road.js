import { GameElement } from './../GR';

export default class Road extends GameElement {
  constructor(game) {
    super(game, {
      name: 'road',
      sprite: 'road',
      pos: { x: 0, y: 220},
      state: {
        xVelocity: 300,
      },
    });
  }

  onUpdate(game, lapse) {
    this.XPos -= ((lapse / 1000) * this.State.xVelocity);
    if (this.XPos <= -120) {
      this.XPos = 0;
    }
  }

  onDraw(game) {
    game.viewport.drawElement(this, {
      pos: { x: this.XPos, y: this.YPos },
    });
    game.viewport.drawElement(this, {
      pos: { x: this.XPos + 120, y: this.YPos },
    });
    game.viewport.drawElement(this, {
      pos: { x: this.XPos + 240, y: this.YPos },
    });
    game.viewport.drawElement(this, {
      pos: { x: this.XPos + 360, y: this.YPos },
    });
  }
}
