import CollisionBox from '../GR/CollisionBox';
import CollisionSets from '../GR/CollisionSets';
import Game from '../GR/Game';
import GameElement from '../GR/GameElement';

export default class Ship extends GameElement {
  constructor(game: Game) {
    super(game, {
      name: 'ship',
      sprite: 'ship',
      pos: { x: 150, y: 180 },
      state: {
        xVelocity: 500,
      },
    });
    this.Config.collisions = new CollisionSets();
    this.Config.collisions.Active = true;
    this.Config.collisions.addBox(new CollisionBox(this, {
      xOffset: 52,
      yOffset: 5,
      width: 15,
      height: 15,
      color: '#f00',
    }));
    this.Config.collisions.addBox(new CollisionBox(this, {
      xOffset: 45,
      yOffset: 20,
      width: 40,
      height: 10,
      color: '#f00',
    }));
    this.Config.collisions.addBox(new CollisionBox(this, {
      xOffset: 40,
      yOffset: 30,
      width: 60,
      height: 40,
      color: '#f00',
    }));
  }

  onUpdate(game: Game, lapse: number) {
    this.Config.pos.x -= ((lapse / 1000) * this.Config.state.xVelocity);
    if (this.Config.pos.x <= -150) {
      this.Config.pos.x = 350;
    }
  }

  onDraw(game: Game) {
    game.viewport.drawElement(this);
  }

  reset() {
    this.Config.pos.x = -140;
  }
}
