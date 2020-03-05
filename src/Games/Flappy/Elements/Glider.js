import GameElement from '../adon-game-reactor/GameElement';

export default class Glider extends GameElement {
  constructor(game) {
    super(game, {
      name: 'glider',
      sprite: 'glider',
      state: {
        xPos: -100,
        xVelocity: 400,
        yPos: 0,
      },
    });
  }

  onUpdate(game, lapse) {
    this.state.xPos -= ((lapse / 1000) * this.state.xVelocity);
    if (this.state.xPos <= -150) {
      this.state.xPos = 500 + Math.floor(Math.random() * 4) * 25;
      this.state.yPos = Math.floor(Math.random() * 3) * 50;
    }
  }

  onDraw(game) {
    game.viewport.drawElement(this, {
      pos: { x: this.state.xPos, y: this.state.yPos },
    });
  }
}
