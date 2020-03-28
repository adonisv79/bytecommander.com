// import { GameElement } from 'game-reactor/lib';
import {CollisionBox, GameElement} from './../GR';

export default class Glider extends GameElement {
  constructor(game) {
    super(game, {
      name: 'glider',
      sprite: 'glider',
      hasCollisions: true,
      pos: { x: -100, y: 0 },
      state: {
        xVelocity: 800,
      },
    });
    this.Collisions.Active = true;
    this.Collisions.addBox(new CollisionBox(this, {
      xOffset: 0,
      yOffset: 18,
      width: 11,
      height: 8,
      color: '#0f0',
    }));
    this.Collisions.addBox(new CollisionBox(this, {
      xOffset: 13,
      yOffset: 10,
      width: 18,
      height: 40,
      color: '#0f0',
    }));
    this.Collisions.addBox(new CollisionBox(this, {
      xOffset: 31,
      yOffset: 4,
      width: 12,
      height: 31,
      color: '#0f0',
    }));
  }

  onUpdate(game, lapse) {
    this.XPos -= ((lapse / 1000) * this.State.xVelocity);
    if (this.XPos <= -150) {
      this.XPos = 500 + Math.floor(Math.random() * 4) * 25;
      this.YPos = Math.floor(Math.random() * 3) * 50;
    }
  }

  onDraw(game) {
    game.viewport.drawElement(this);
  }

  reset() {
    this.XPos = -100;
  }
}
