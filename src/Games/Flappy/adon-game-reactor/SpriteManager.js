import React, {Component} from 'react';

export default class SpriteManager extends Component{
  constructor(game) {
    super();
    this.game = game;
    this.sprites = {};
  }

  add(id, path) {
    if (this.sprites[id]) {
      throw new Error(`Sprite ${id} has already been set`);
    }
    this.sprites[id] = path;
  }

  get(id) {
    if (!this.sprites[id]) {
      throw new Error(`Sprite ${id} does not exist`);
    }
    return this.game.refs[id];
  }

  render() {
    const images = [];
    const entries = Object.entries(this.sprites);
    for (const [id, path] of entries) {
      console.log(id + ':' + path);
      images.push(<img ref={id} src={path} className="hidden" />);
    }
    return (
      <div id={`BRAND_ID${'_SPRITES'}`}>
        { images }
      </div>
    );
  }
}