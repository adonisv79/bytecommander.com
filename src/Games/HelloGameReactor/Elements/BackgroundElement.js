import { GameElement } from 'game-reactor';

export default class Background extends GameElement {
  constructor(game) {
    super(game, {
      name: 'background',
      sprite: 'myfirstbg',
    });
  }

  onDraw(game) {
    game.viewport.drawElement(this, {
      pos: { x: 0, y: 0 }
    });
  }
}