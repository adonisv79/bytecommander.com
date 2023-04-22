import Game from '../GR/Game';
import CollisionBox from '../GR/CollisionBox';
import GameElement from '../GR/GameElement';
import CollisionSets from '../GR/CollisionSets';

export default class Coin extends GameElement {
  constructor(game: Game) {
    super(game, {
      name: 'coin',
      sprite: 'coin',
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
    game.sprites.addSprite('coin1', 'coin', {
      source: 'coin',
      spriteCoordinates: {
        x: 0, y: 0, width: 40, height: 40,
      },
      renderOffset: { x: 0, y: 0 },
    });
    game.sprites.addSprite('coin2', 'coin', {
      source: 'coin',
      spriteCoordinates: {
        x: 40, y: 0, width: 30, height: 40,
      },
      renderOffset: { x: 3, y: 0 },
    });
    game.sprites.addSprite('coin3', 'coin', {
      source: 'coin',
      spriteCoordinates: {
        x: 70, y: 0, width: 20, height: 40,
      },
      renderOffset: { x: 7, y: 0 },
    });
    game.sprites.addSprite('coin4', 'coin', {
      source: 'coin',
      spriteCoordinates: {
        x: 90, y: 0, width: 30, height: 40,
      },
      renderOffset: { x: 5, y: 0 },
    });

    this.Config.collisions = new CollisionSets();
    this.Config.collisions.Active = true;
    this.Config.collisions.addBox(new CollisionBox(this, {
      xOffset: 13,
      yOffset: 4,
      width: 15,
      height: 34,
      color: '#ff0',
    }));
    this.Config.collisions.addBox(new CollisionBox(this, {
      xOffset: 6,
      yOffset: 15,
      width: 28,
      height: 15,
      color: '#ff0',
    }));
  }

  onUpdate(game: Game, lapse: number) {
    this.Config.pos.x -= ((lapse / 1000) * this.Config.state.xVelocity);
    if (this.Config.pos.x < 20 && this.Config.state.enabled && !this.Config.state.isMissed) {
      this.Config.state.isMissed = true;
      game.State.combo = 0;
      game.State.comboBonus = 0;
    }
    if (this.Config.pos.x <= -50) {
      this.Config.state.isMissed = false;
      this.Config.state.enabled = true;
      this.Config.pos.x = 400;
      this.Config.pos.y = 40 + (Math.ceil(Math.random() * 4) * 35);
    }
  }

  onDraw(game: Game, lapse: number) {
    if (this.Config.state.enabled) {
      const a = this.Config.animations.idle;
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
      const spriteState = game.sprites.getSprite(currFrame.sprite);
      const spriteSource = game.sprites.getSource(spriteState.source);
      if (spriteSource) {
        game.viewport.CanvasRef2DCtx.drawImage(spriteSource,
          spriteState.spriteCoordinates.x,
          spriteState.spriteCoordinates.y,
          spriteState.spriteCoordinates.width,
          spriteState.spriteCoordinates.height,
          this.Config.pos.x + spriteState.renderOffset.x,
          this.Config.pos.y + spriteState.renderOffset.y,
          spriteState.spriteCoordinates.width,
          spriteState.spriteCoordinates.height);
      }

      if (this.Config.state.isMissed) {
        game.viewport.drawText('Miss!', { x: 20, y: this.Config.pos.y }, 'missed');
      }
    }
  }

  reset() {
    this.Config.pos.x = -50;
    this.Config.state.enabled = true;
  }
}
