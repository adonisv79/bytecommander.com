import GameElement from '../adon-game-reactor/GameElement';

export default class Road extends GameElement {
  constructor(game) {
    super(game, {
      name: 'road',
      sprite: 'road',
      state: {
        xPos: 0,
        xVelocity: 200,
        sprite: null,
      },
    });
  }

  onUpdate(game, lapse) {
    this.state.xPos -= ((lapse / 1000) * this.state.xVelocity);
    if (this.state.xPos <= -120) {
      this.state.xPos = 0;
    }
  }

  onDraw(game) {
    game.viewport.drawElement(this, {
      pos: { x: this.state.xPos, y: 220 },
    });
    game.viewport.drawElement(this, {
      pos: { x: this.state.xPos + 120, y: 220 },
    });
    game.viewport.drawElement(this, {
      pos: { x: this.state.xPos + 240, y: 220 },
    });
    game.viewport.drawElement(this, {
      pos: { x: this.state.xPos + 360, y: 220 },
    });
  }
}
