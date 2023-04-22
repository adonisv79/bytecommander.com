import CollisionBox from '../GR/CollisionBox';
import CollisionSets from '../GR/CollisionSets';
import Game from '../GR/Game';
import GameElement from '../GR/GameElement';

export default class Glider extends GameElement {
  constructor(game: Game) {
    super(game, {
      name: 'glider',
      sprite: 'glider',
      pos: { x: -100, y: 0 },
      state: {
        xVelocity: 800,
      },
    });
    this.Config.collisions = new CollisionSets();
    this.Config.collisions.Active = true;
    this.Config.collisions.addBox(new CollisionBox(this, {
      xOffset: 0,
      yOffset: 18,
      width: 11,
      height: 8,
      color: '#0f0',
    }));
    this.Config.collisions.addBox(new CollisionBox(this, {
      xOffset: 13,
      yOffset: 10,
      width: 18,
      height: 40,
      color: '#0f0',
    }));
    this.Config.collisions.addBox(new CollisionBox(this, {
      xOffset: 31,
      yOffset: 4,
      width: 12,
      height: 31,
      color: '#0f0',
    }));
  }

  onUpdate(game: Game, lapse: number) {
    this.Config.pos.x -= ((lapse / 1000) * this.Config.state.xVelocity);
    if (this.Config.pos.x <= -150) {
      this.Config.pos.x = 500 + Math.floor(Math.random() * 4) * 25;
      this.Config.pos.y = Math.floor(Math.random() * 3) * 50;
    }
  }

  onDraw(game: Game) {
    game.viewport.drawElement(this);
  }

  reset() {
    this.Config.pos.x = -100;
  }
}
