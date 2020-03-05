let self;

export default class GameViewport {
  constructor(game) {
    self = this;
    self.pens = {
      default: '10px Arial',
    }
    self.game = game;
    self.config = game.config.viewport;
  }

  set canvas(val) {
    if (!val) { throw new Error('Canvas being set to null'); }
    self.htmlCanvas = val;
    self.htmlCanvasCtx = val.getContext('2d');
  }

  get pagePosition() {
    const rect = self.htmlCanvas.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top,
    };
  }

  clear() {
    if (self.htmlCanvasCtx) {
      self.htmlCanvasCtx.clearRect(0, 0, self.htmlCanvas.width, self.htmlCanvas.height);
    }
  }

  drawElement(element, config) {
    if (self.htmlCanvasCtx) {
      const DEFAULT_CONFIG = {
        pos: { x: 0, y: 0 },
      };
      const c = { ...DEFAULT_CONFIG, ...config };
      self.htmlCanvasCtx.drawImage(element.sprite, c.pos.x, c.pos.y);
      if (element.state.size) {
        self.htmlCanvasCtx.beginPath();
        self.htmlCanvasCtx.strokeStyle = '#0f0';
        self.htmlCanvasCtx.rect(c.pos.x, c.pos.y, element.state.size.width, element.state.size.height);
        self.htmlCanvasCtx.stroke();
      }
    }
  }

  drawText(text, config, pen = 'default') {
    const DEFAULT_CONFIG = {
      pos: { x: 0, y: 0 },
    };
    const c = { ...DEFAULT_CONFIG, ...config };
    self.htmlCanvasCtx.font = self.pens[pen];
    self.htmlCanvasCtx.fillText(text, c.x, c.y);
  }

}
