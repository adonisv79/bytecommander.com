import React, { RefObject, createRef, useRef } from 'react';
import Game from './Game';

let self: SpriteManager;

interface SpriteSource {
  path: string,
  ref: RefObject<HTMLImageElement>,
}

interface SpriteConfig {
  source: string,
  spriteCoordinates: {
    x: number,
    y: number,
    width: number,
    height: number,
  },
  renderOffset: {
    x: number,
    y: number,
  },
  scale?: number,
};

const DEFAULT_CONFIG = {
  source: '',
  spriteCoordinates: {
    x: 0,
    y: 0,
    width: 20,
    height: 20,
  },
  renderOffset: {
    x: 0,
    y: 0,
  },
  scale: 1,
};


export default class SpriteManager {
  private game: Game;
  sources: { [key: string]: SpriteSource };
  sprites: { [key: string]: SpriteConfig };

  constructor(game: Game) {
    this.sources = {};
    this.sprites = {};
    this.game = game;
    self = this;
  }

  addSource(id: string, path: string) {
    self.sources[id] = {
      path,
      ref: createRef()
    };
  }

  getSource(id: string) {
    return self.sources[id].ref?.current;
  }

  /**
   * Adds a new re-usable Sprite in the dicttionary
   * @param id - The reference id or key to use
   * @param sourceId - The ID of the source (image spritesheet) to retrieve the sprite from
   * @param config - The Sprite configuration
   */
  addSprite(id: string, sourceId: string, config: SpriteConfig) {
    if (!this.sources[sourceId]) {
      throw new Error(`Sprite source ID '${sourceId}' does not exist`);
    }

    this.sprites[id] = { ...DEFAULT_CONFIG, ...config };
  }

  getSprite(id: string) {
    if (!this.sprites[id]) {
      throw new Error(`Sprite '${id}' does not exist.`);
    }
    return this.sprites[id];
  }

  render() {
    const images = [];
    const entries = Object.entries(this.sources);
    for (const [id, config] of entries) {
      images.push(<img alt={"Image for " + id}
        ref={config.ref} key={`game-reactor_${config.path}`}
        src={config.path} hidden={true} />);
    }
    return (
      <div id={`BRAND_ID${'_SPRITES'}`}>
        {images}
      </div>
    );
  }
}