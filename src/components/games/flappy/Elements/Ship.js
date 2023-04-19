// import { GameElement } from 'game-reactor/lib';
import {CollisionBox, GameElement} from './../GR';

export default class Ship extends GameElement {
  constructor(game) {
    super(game, {
      name: 'ship',
      sprite: 'ship',
      hasCollisions: true,
      pos: { x: 150, y: 180 },
      state: {
        xVelocity: 500,
      },
    });
    this.Collisions.Active = true;
    this.Collisions.addBox(new CollisionBox(this, {
      xOffset: 52,
      yOffset: 5,
      width: 15,
      height: 15,
      color: '#f00',
    }));
    this.Collisions.addBox(new CollisionBox(this, {
      xOffset: 45,
      yOffset: 20,
      width: 40,
      height: 10,
      color: '#f00',
    }));
    this.Collisions.addBox(new CollisionBox(this, {
      xOffset: 40,
      yOffset: 30,
      width: 60,
      height: 40,
      color: '#f00',
    }));
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

  reset() {
    this.XPos = -140;
  }
}
