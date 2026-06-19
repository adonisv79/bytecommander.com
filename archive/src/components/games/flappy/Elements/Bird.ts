import {
  CollisionBox, CollisionSets, Game, GameElement
} from "game-reactor/dist";


const BIRD_START_YPOS = 150;

export default class Bird extends GameElement {

  constructor(game: Game) {
    super(game.Logger, {
      name: 'bird',
      sprite: 'jollibee',
      animations: {
        flying: {
          currentLapse: 0,
          currentFrameIndex: 0,
          frames: [
            {
              sprite: 'jollibee1',
              delay: 125,
            },
            {
              sprite: 'jollibee2',
              delay: 125,
            },
            {
              sprite: 'jollibee3',
              delay: 125,
            },
            {
              sprite: 'jollibee2',
              delay: 125,
            },
          ],
        },
      },
      pos: { x: 50, y: 150 },
    }, {
      yVelocity: 0,
      gravity: 20,
      size: {
        height: 26,
        width: 37,
      },
    });

    this.Config.collisions = new CollisionSets();
    this.Config.collisions.addBox(new CollisionBox(this, {
      xOffset: 5,
      yOffset: 8,
      width: 23,
      height: 17,
      color: '#ff0',
    }));
    this.Config.collisions.Active = true;

    game.Sprites.addSprite('jollibee1', 'jollibee', {
      source: 'jollibee',
      spriteCoordinates: {
        x: 0, y: 0, width: 38, height: 40,
      },
      renderOffset: { x: 0, y: 0 },
      scale: 0.8,
    });

    game.Sprites.addSprite('jollibee2', 'jollibee', {
      source: 'jollibee',
      spriteCoordinates: {
        x: 39, y: 0, width: 40, height: 40,
      },
      renderOffset: { x: 0, y: -1 },
      scale: 0.8,
    });

    game.Sprites.addSprite('jollibee3', 'jollibee', {
      source: 'jollibee',
      spriteCoordinates: {
        x: 81, y: 0, width: 40, height: 40,
      },
      renderOffset: { x: 0, y: -1 },
      scale: 0.8,
    });
  }

  onUpdate(game: Game, timeDelta: number) {
    this.State.yVelocity += this.State.gravity * timeDelta;
    this.Config.pos!.y += this.State.yVelocity;
    if (this.Config.pos!.y >= 230) { // drowned
      game.State.isPlaying = false;
      this.State.yVelocity = 0;
    }
    if (this.Config.collisions?.Active) {
      const glider = game.Elements.get('glider');
      const ship = game.Elements.get('ship');
      const coin = game.Elements.get('coin');
      if (this.Config.collisions.collidesWithElement(glider)
        || this.Config.collisions.collidesWithElement(ship)) {
        game.State.isPlaying = false;
      }

      if (coin.State.enabled && this.Config.collisions.collidesWithElement(coin)) {
        coin.State.enabled = false;
        game.State.score += 1 + game.State.comboBonus;
        game.State.combo += 1;
        // update next combo bonus
        if (game.State.combo < 2) {
          game.State.comboBonus = 0;
        } else if (game.State.combo < 5) {
          game.State.comboBonus = 1;
        } else if (game.State.combo < 9) {
          game.State.comboBonus = 2;
        } else {
          game.State.comboBonus = 3;
        }
      }
    }
  }

  onDraw(game: Game, timeDelta: number) {
    const a = this.Config.animations.flying;
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
        spriteState.spriteCoordinates.width * (spriteState.scale || 1),
        spriteState.spriteCoordinates.height * (spriteState.scale || 1));
    }
  }

  reset() {
    this.Config.pos!.y = BIRD_START_YPOS;
    this.State.yVelocity = -8;
  }

  jump(game: Game) {
    if (this.Config.pos!.y > -20) {
      this.State.yVelocity = -9;
      game.Sounds.play('jump');
    }
  }
}
