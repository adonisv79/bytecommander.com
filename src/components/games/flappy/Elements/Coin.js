// import { GameElement } from 'game-reactor/lib';
import {CollisionBox, GameElement} from './../GR';

export default class Coin extends GameElement {
  constructor(game) {
    super(game, {
      name: 'coin',
      sprite: 'coin',
      hasCollisions: true,
      animations: {
        idle: {
          currentLapse: 0,
          currentFrameIndex: 0,
          frames: [
            {
              sprite: 'coin1',
              delay: 80,
            },
            {
              sprite: 'coin2',
              delay: 80,
            },
            {
              sprite: 'coin3',
              delay: 80,
            },
            {
              sprite: 'coin4',
              delay: 80,
            },
          ],
        },
      },
      pos: { x: -40, y: 90 },
      state: {
        xVelocity: 300,
        enabled: true,
        isMissed: false,
      },
    });
    game.Sprites.addSprite('coin1', 'coin',{
      spriteCoordinates: {
        x: 0, y: 0, width: 40, height: 40,
      },
      renderOffset: { x: 0, y: 0 },
    });
    game.Sprites.addSprite('coin2', 'coin',{
      source: 'coin',
      spriteCoordinates: {
        x: 40, y: 0, width: 30, height: 40,
      },
      renderOffset:{ x: 3, y: 0 },
    });
    game.Sprites.addSprite('coin3', 'coin',{
      spriteCoordinates: {
        x: 70, y: 0, width: 20, height: 40,
      },
      renderOffset: { x: 7, y: 0 },
    });
    game.Sprites.addSprite('coin4', 'coin',{
      spriteCoordinates: {
        x: 90, y: 0, width: 30, height: 40,
      },
      renderOffset: { x: 5, y: 0 },
    });
    this.Collisions.Active = true;
    this.Collisions.addBox(new CollisionBox(this, {
      xOffset: 13,
      yOffset: 4,
      width: 15,
      height: 34,
      color: '#ff0',
    }));
    this.Collisions.addBox(new CollisionBox(this, {
      xOffset: 6,
      yOffset: 15,
      width: 28,
      height: 15,
      color: '#ff0',
    }));
  }

  onUpdate(game, lapse) {
    this.XPos -= ((lapse / 1000) * this.State.xVelocity);
    if (this.XPos < 20 && this.State.enabled && !this.State.isMissed) {
      this.State.isMissed = true;
      game.State.combo = 0;
      game.State.comboBonus = 0;
    }
    if (this.XPos <= -50) {
      this.State.isMissed = false;
      this.State.enabled = true;
      this.XPos = 400;
      this.YPos = 40 + (Math.ceil(Math.random()* 4) * 35);
    }
  }

  onDraw(game, lapse) {
    if (this.State.enabled) {
      const a = this.config.animations.idle;
      a.currentLapse += lapse;
      let currFrame = a.frames[a.currentFrameIndex];
      if (a.currentLapse > currFrame.delay) {
        a.currentLapse -= currFrame.delay;
        a.currentFrameIndex += 1;
        if (a.currentFrameIndex >= a.frames.length) {
          a.currentFrameIndex = 0;
        }
        currFrame = a.frames[a.currentFrameIndex];
      }
      const spriteState = game.Sprites.getSprite(currFrame.sprite);
      const spriteSource = game.Sprites.getSource(spriteState.source);
      game.viewport.CanvasRefCtx.drawImage(spriteSource,
        spriteState.spriteCoordinates.x,
        spriteState.spriteCoordinates.y,
        spriteState.spriteCoordinates.width,
        spriteState.spriteCoordinates.height,
        this.XPos + spriteState.renderOffset.x,
        this.YPos + spriteState.renderOffset.y,
        spriteState.spriteCoordinates.width,
        spriteState.spriteCoordinates.height);

      if (this.State.isMissed) {
        game.viewport.drawText('Miss!', { x: 20, y: this.YPos }, 'missed');
      }

      //collision temp. remove later

      // game.viewport.CanvasRefCtx.beginPath();
      // let bx;
      // for (let i = 0; i < this.Collisions.Boxes.length; i += 1) {
      //   bx = this.Collisions.Boxes[i];
      //   game.viewport.CanvasRefCtx.strokeStyle = bx.Color;
      //   game.viewport.CanvasRefCtx.rect(bx.XPos, bx.YPos, bx.Width, bx.Height);
      // }
      // game.viewport.CanvasRefCtx.stroke();
    }
  }

  reset() {
    this.XPos = -50;
    this.State.enabled = true;
  }
}
