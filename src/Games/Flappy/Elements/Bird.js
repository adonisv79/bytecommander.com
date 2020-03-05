import { GameElement } from 'game-reactor/lib';

const BIRD_START_YPOS = 150;

export default class Bird extends GameElement {
  constructor(game) {
    super(game, {
      name: 'bird',
      sprite: 'bird',
      state: {
        yPos: 150,
        yVelocity: 0,
        size: {
          height: 26,
          width: 37,
        },
      },
    });
  }

  onUpdate(game, lapse) {
    this.state.yVelocity += ((lapse / 1000) * 75);
    this.state.yPos += this.state.yVelocity;
    if (this.state.yPos >= 230) { // drowned
      this.game.state.isPlaying = false;
      this.state.yVelocity = 0;
    }
  }

  onDraw(game) {
    game.viewport.drawElement(this, {
      pos: { x: 50, y: this.state.yPos },
    });
  }

  jump() {
    if (this.state.yPos > 5) {
      this.state.yVelocity = -9;
    }
  }

  reset() {
    this.state.yPos = BIRD_START_YPOS;
    this.state.yVelocity = -8;
  }
}
