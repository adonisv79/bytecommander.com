import {
  CollisionBox, CollisionSets, Game, GameElement
} from "game-reactor/dist";

export default class Coin extends GameElement {
  constructor(game: Game) {
    super(game.Logger, {
      name: 'coin',
      sprite: 'coin',
      animations: {
        idle: {
          currentLapse: 0,
          currentFrameIndex: 0,
          frames: [
            {
              sprite: 'coin1',
              delay: 250,
            },
            {
              sprite: 'coin2',
              delay: 250,
            },
            {
              sprite: 'coin3',
              delay: 250,
            },
            {
              sprite: 'coin4',
              delay: 250,
            },
          ],
        },
      },
      pos: { x: -40, y: 90 },
    }, {
      xVelocity: 150,
      enabled: true,
      isMissed: false,
    });

    game.Sprites.addSprite('coin1', 'coin', {
      source: 'coin',
      spriteCoordinates: {
        x: 0, y: 0, width: 40, height: 40,
      },
      renderOffset: { x: 0, y: 0 },
    });

    game.Sprites.addSprite('coin2', 'coin', {
      source: 'coin',
      spriteCoordinates: {
        x: 40, y: 0, width: 30, height: 40,
      },
      renderOffset: { x: 3, y: 0 },
    });

    game.Sprites.addSprite('coin3', 'coin', {
      source: 'coin',
      spriteCoordinates: {
        x: 70, y: 0, width: 20, height: 40,
      },
      renderOffset: { x: 7, y: 0 },
    });

    game.Sprites.addSprite('coin4', 'coin', {
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

  onUpdate(game: Game, timeDelta: number) {
    this.Config.pos!.x -= this.State.xVelocity * timeDelta;
    if (this.Config.pos!.x < 20 && this.State.enabled && !this.State.isMissed) {
      this.State.isMissed = true;
      game.State.combo = 0;
      game.State.comboBonus = 0;
    }
    if (this.Config.pos!.x <= -50) {
      this.State.isMissed = false;
      this.State.enabled = true;
      this.Config.pos!.x = 400;
      this.Config.pos!.y = 40 + (Math.ceil(Math.random() * 4) * 35);
    }
  }

  onDraw(game: Game, timeDelta: number) {
    if (this.State.enabled) {
      const a = this.Config.animations.idle;
      a.currentLapse += timeDelta * 1000;
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
      if (spriteSource) {
        game.Viewport.Canvas2DContext.drawImage(spriteSource,
          spriteState.spriteCoordinates.x,
          spriteState.spriteCoordinates.y,
          spriteState.spriteCoordinates.width,
          spriteState.spriteCoordinates.height,
          this.Config.pos!.x + spriteState.renderOffset.x,
          this.Config.pos!.y + spriteState.renderOffset.y,
          spriteState.spriteCoordinates.width,
          spriteState.spriteCoordinates.height);
      }

      if (this.State.isMissed) {
        game.Viewport.drawText('Miss!', { x: 20, y: this.Config.pos!.y }, game.Fonts.get('missed'));
      }
    }
  }

  reset() {
    this.Config.pos!.x = -50;
    this.State.enabled = true;
  }
}
