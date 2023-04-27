export interface SVGElementConfig {
  bgcolor: string;
  size: {
    height: number;
    width: number;
  };
  margin: {
    top: number;
    left: number;
    right: number;
    bottom: number;
  };
  position: {
    xOffset: number;
    yOffset: number;
  };
}

export interface RenderArea {
  height: number;
  width: number;
  xOffset: number;
  yOffset: number;
}

export default class SVGElementAbstract {
  protected name: string;
  protected config: SVGElementConfig;
  protected renderArea: RenderArea;

  get Name(): string {
    return this.name;
  }

  constructor(name: string, config: SVGElementConfig) {
    this.name = name;
    this.config = config;
    this.renderArea = {
      height: config.size.height - config.margin.top - config.margin.bottom,
      width: config.size.width - config.margin.left - config.margin.right,
      xOffset: config.position.xOffset + config.margin.left,
      yOffset: config.position.yOffset + config.margin.top,
    };
  }
}
