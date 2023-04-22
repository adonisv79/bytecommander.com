import GameElement from "../GR/GameElement";
import CollisionBox from "../GR/CollisionBox";
import Game from "../GR/Game";
import CollisionSets from "../GR/CollisionSets";

const BIRD_START_YPOS = 150;

export default class Bird extends GameElement {
  constructor(game: Game) {
    super(game, {
      name: 'bird',
      sprite: 'jollibee',
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

    this.Config.collisions = new CollisionSets();
    this.Config.collisions.addBox(new CollisionBox(this, {
      xOffset: 5,
      yOffset: 8,
      width: 23,
      height: 17,
      color: '#ff0',
    }));
    this.Config.collisions.Active = true;

    game.sprites.addSprite('jollibee1', 'jollibee', {
      source: 'jollibee',
      spriteCoordinates: {
        x: 0, y: 0, width: 38, height: 40,
      },
      renderOffset: { x: 0, y: 0 },
      scale: 0.8,
    });

    game.sprites.addSprite('jollibee2', 'jollibee', {
      source: 'jollibee',
      spriteCoordinates: {
        x: 39, y: 0, width: 40, height: 40,
      },
      renderOffset: { x: 0, y: -1 },
      scale: 0.8,
    });

    game.sprites.addSprite('jollibee3', 'jollibee', {
      source: 'jollibee',
      spriteCoordinates: {
        x: 81, y: 0, width: 40, height: 40,
      },
      renderOffset: { x: 0, y: -1 },
      scale: 0.8,
    });
  }

  onUpdate(game: Game, lapse: number) {
    this.Config.state.yVelocity += ((lapse / 1000) * this.Config.state.gravity);
    this.Config.pos.y += this.Config.state.yVelocity;
    if (this.Config.pos.y >= 230) { // drowned
      this.game.state.isPlaying = false;
      this.Config.state.yVelocity = 0;
    }
    if (this.Config.collisions?.Active) {
      const glider = game.elements.get('glider');
      const ship = game.elements.get('ship');
      const coin = game.elements.get('coin');
      if (this.Config.collisions.collidesWithElement(glider)
        || this.Config.collisions.collidesWithElement(ship)) {
        game.state.isPlaying = false;
      }

      if (coin.Config.state.enabled && this.Config.collisions.collidesWithElement(coin)) {
        coin.Config.state.enabled = false;
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

  onDraw(game: Game, lapse: number) {
    const a = this.Config.animations.flying;
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
        spriteState.spriteCoordinates.width * (spriteState.scale || 1),
        spriteState.spriteCoordinates.height * (spriteState.scale || 1));
    }
  }

  reset() {
    this.Config.pos.y = BIRD_START_YPOS;
    this.Config.state.yVelocity = -8;
  }

  jump() {
    if (this.Config.pos.y > -20) {
      this.Config.state.yVelocity = -9;
      this.game.sounds.play('jump');
    }
  }
}
