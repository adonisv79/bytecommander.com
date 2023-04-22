import React, { RefObject } from 'react';
import Game from './Game';
import GameElement from './GameElement';
let self: GameViewport;

export interface DrawPositions {
  x: number,
  y: number,
}

export interface ViewPortConfig {
  showCollisions?: boolean,
  showPerfStats?: boolean,
  fps: number,
  width: number,
  height: number,
}

export default class GameViewport {
  private game: Game;
  // private pens: {};
  private config: {};
  private canvasRef: RefObject<HTMLCanvasElement>;
  private canvasRef2dCtx: CanvasRenderingContext2D | null;

  constructor(game: Game) {
    this.game = game;
    // this.pens = {
    //   default: '10px Arial',
    // }
    this.config = game.config.viewport;
    this.canvasRef = React.createRef();
    this.canvasRef2dCtx = null;
    self = this;
  }

  get CanvasRef() {
    return self.canvasRef;
  }

  /**
   * Retrieves the reference to the 2d context of the canvas
   */
  get CanvasRef2DCtx() {
    if (!self.canvasRef2dCtx && self.canvasRef.current) {
      self.canvasRef2dCtx = self.canvasRef.current.getContext('2d');
    }
    if (!self.canvasRef2dCtx) throw new Error('Canvas context being accessed but is not available.');
    return self.canvasRef2dCtx;
  }

  get PagePosition() {
    const rect = self.CanvasRef.current?.getBoundingClientRect();
    return {
      left: rect?.left || 0,
      top: rect?.top || 0,
    };
  }

  clear() {
    if (self.CanvasRef2DCtx && self.canvasRef.current) {
      self.CanvasRef2DCtx.clearRect(0, 0, self.canvasRef.current.width, self.canvasRef.current.height);
    }
  }

  drawElement(element: GameElement, pos?: DrawPositions) {
    if (self.CanvasRef2DCtx) {
      pos = pos || {
        x: element.Config.pos.x,
        y: element.Config.pos.y,
      };
      let image = self.game.sprites.getSource(element.Config.sprite)
      if (image) {
        self.CanvasRef2DCtx.drawImage(image, pos.x, pos.y);
      }
      if (self.game.ShowCollisions) {
        if (element.Config.collisions?.Active) {
          self.CanvasRef2DCtx.beginPath();
          let bx;
          for (let i = 0; i < element.Config.collisions.Boxes.length; i += 1) {
            bx = element.Config.collisions.Boxes[i];
            self.CanvasRef2DCtx.strokeStyle = bx.Color;
            self.CanvasRef2DCtx.rect(bx.XPos, bx.YPos, bx.Width, bx.Height);
          }
          self.CanvasRef2DCtx.stroke();
        }
      }
    }
  }

  drawText(text: string, pos: DrawPositions, font = 'default') {
    if (self.CanvasRef2DCtx) {
      //clean previous font changes
      self.CanvasRef2DCtx.font = 'Arial';
      self.CanvasRef2DCtx.fillStyle = 'black';
      self.CanvasRef2DCtx.strokeStyle = '';
      pos = pos || { x: 0, y: 0, };
      
      const f = self.game.fonts.get(font);

      const size = f.size || '10px';
      const family = f.family || 'Arial';
      const color = f.color || '#000';
      self.CanvasRef2DCtx.font = `${size} ${family}`;
      self.CanvasRef2DCtx.fillStyle = color;
      self.CanvasRef2DCtx.fillText(text, pos.x, pos.y);
      self.CanvasRef2DCtx.textBaseline = 'top';
      if (f.stroke_width) {
        self.CanvasRef2DCtx.strokeStyle = f.stroke_color || '#fff';
        self.CanvasRef2DCtx.lineWidth = f.stroke_width;
        self.CanvasRef2DCtx.strokeText(text, pos.x, pos.y);
      }
    }
  }
}
