// import SVGElementAbstract, { SVGElementConfig } from './SVGElementAbstract';
// import SVG from './index';

// export interface DataSource {
//   mapping: { [key: string]: string };
//   values: any[];
// }

// export interface LineConfig {
//   id: string;
//   dataMap: string;
//   render: {
//     itemXOffset: number;
//     itemWidth: number;
//     offsetLeft: number;
//     offsetTop: number;
//     yScaler: Function;
//   };
//   stroke: {
//     color: string;
//     width: number;
//     opacity: number;
//   };
// }

// export default class SVGChartAbstract extends SVGElementAbstract {
//   protected svg: SVG;

//   protected dataSource: DataSource;

//   getDataMappedValue(dataItem: any, mappingName: string): any {
//     return _.get(dataItem, this.dataSource.mapping[mappingName]);
//   }

//   constructor(svg: SVG, name: string, config: SVGElementConfig, dataSource: DataSource) {
//     super(name, config);
//     this.svg = svg;
//     this.dataSource = dataSource;
//   }

//   renderLine(config: LineConfig): void {
//     let x1FirstItem = true;
//     let prevValue = 0;
//     let prevYpos = 0;
//     let nextYposHigh5dEMA = 0;
//     // GENERATE THE CEILING TREND
//     this.svg.d3.selectAll(`line.${config.id}`)
//       .data(this.dataSource.values).enter()
//       .append('line')
//       .attr('class', config.id)
//       .attr('visibility', (d) => {
//         let visibility = 'visible';
//         if (prevValue === 0) { // init
//           prevValue = this.getDataMappedValue(d, config.dataMap);
//         }

//         if (!prevValue || prevValue <= 0) {
//           visibility = 'hidden';
//         }
//         prevValue = this.getDataMappedValue(d, config.dataMap);
//         return visibility;
//       })
//       .attr('x1', () => {
//         if (x1FirstItem) {
//           x1FirstItem = false;
//           return 0;
//         }
//         return (config.render.itemXOffset * -2);
//       })
//       .attr('y1', (d) => {
//         if (prevYpos === 0) {
//           prevYpos = this.getDataMappedValue(d, config.dataMap);
//         } else {
//           prevYpos = nextYposHigh5dEMA;
//         }
//         nextYposHigh5dEMA = this.getDataMappedValue(d, config.dataMap);
//         return this.renderArea.height - config.render.yScaler(prevYpos);
//       })
//       .attr('x2', () => config.render.itemXOffset * 2)
//       .attr('y2', (d) => {
//         const ypos2 = this.getDataMappedValue(d, config.dataMap);
//         prevYpos = ypos2; // the latest Y is the next previous Y
//         return this.renderArea.height - config.render.yScaler(ypos2);
//       })
//       .attr('width', Math.ceil(config.render.itemWidth / 8) || 1)
//       .attr('stroke', config.stroke.color)
//       .attr('stroke-width', config.stroke.width)
//       .attr('stroke-opacity', config.stroke.opacity)
//       .attr('transform', (d, i) => {
//         const translate = [(config.render.itemWidth * i) + config.render.offsetLeft, config.render.offsetTop];
//         return `translate(${translate})`;
//       });
//   }
// }
