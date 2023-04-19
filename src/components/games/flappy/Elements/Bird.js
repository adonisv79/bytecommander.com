// import { GameElement } from 'game-reactor/lib';
import { GameElement, CollisionBox } from './../GR';

const BIRD_START_YPOS = 150;

export default class Bird extends GameElement {
  constructor(game) {
    super(game, {
      name: 'bird',
      sprite: 'jollibee',
      hasCollisions: true,
      animations: {
        flying: {
          currentLapse: 0,
          currentFrameIndex: 0,
          frames: [
            {
              sprite: 'jollibee1',
              delay: 70,
            },
            {
              sprite: 'jollibee2',
              delay: 70,
            },
            {
              sprite: 'jollibee3',
              delay: 70,
            },
            {
              sprite: 'jollibee2',
              delay: 70,
            },
          ],
        },
      },
      pos: { x: 50, y: 150 },
      state: {
        yVelocity: 0,
        gravity: 65,
        size: {
          height: 26,
          width: 37,
        },
      },
    });

    this.Collisions.Active = true;
    this.Collisions.addBox(new CollisionBox(this, {
      xOffset: 5,
      yOffset: 8,
      width: 23,
      height: 17,
      color: '#ff0',
    }));

    game.Sprites.addSprite('jollibee1', 'jollibee',{
      spriteCoordinates: {
        x: 0, y: 0, width: 38, height: 40,
      },
      renderOffset: { x: 0, y: 0 },
      scale: 0.8,
    });

    game.Sprites.addSprite('jollibee2', 'jollibee',{
      spriteCoordinates: {
        x: 39, y: 0, width: 40, height: 40,
      },
      renderOffset: { x: 0, y: -1 },
      scale: 0.8,
    });

    game.Sprites.addSprite('jollibee3', 'jollibee',{
      spriteCoordinates: {
        x: 81, y: 0, width: 40, height: 40,
      },
      renderOffset: { x: 0, y: -1 },
      scale: 0.8,
    });
  }

  onUpdate(game, lapse) {
    this.State.yVelocity += ((lapse / 1000) * this.State.gravity);
    this.YPos += this.State.yVelocity;
    if (this.YPos >= 230) { // drowned
      this.game.state.isPlaying = false;
      this.State.yVelocity = 0;
    }
    if (this.HasCollisions && this.Collisions.Active) {
      const glider = game.elements.get('glider');
      const ship = game.elements.get('ship');
      const coin = game.elements.get('coin');
      if (this.Collisions.collidesWithElement(glider)
        || this.Collisions.collidesWithElement(ship)) {
        game.state.isPlaying = false;
      }

      if (coin.State.enabled && this.Collisions.collidesWithElement(coin)) {
        coin.State.enabled = false;
        game.State.score += 1 + game.State.comboBonus;
        game.State.combo += 1;
        // update next combo bonus
        if (game.State.combo < 5) {
          game.State.comboBonus = 0;
        } else if (game.State.combo < 7) {
          game.State.comboBonus = 1;
        } else if (game.State.combo < 9) {
          game.State.comboBonus = 2;
        } else {
          game.State.comboBonus = 3;
        }
      }
    }
  }

  onDraw(game, lapse) {
    //game.viewport.drawElement(this);

    const a = this.config.animations.flying;
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
      spriteState.spriteCoordinates.width * spriteState.scale,
      spriteState.spriteCoordinates.height * spriteState.scale);
  }

  reset() {
    this.YPos = BIRD_START_YPOS;
    this.State.yVelocity = -8;
  }

  jump() {
    if (this.YPos > -20) {
      this.State.yVelocity = -9;
      this.game.Sounds.play('jump');
    }
  }
}
