import Chart, { DataChangedEvent, Viewport } from './index';

const DEFAULT_BAR_COLOR = "#06d"
const DEFAULT_PADDING = 20

export interface BarConfig {
  color?: string,
  padding?: number
}

export interface BarChartProps {
  /** A unique ID to identify against other elements in the DOM */
  id: string,
  /** The series of numeric values to present */
  data: number[],
  /** The viewport's configuration */
  viewport: Viewport,
  bars?: BarConfig,
}

/** Barchart renders a series of data as scales of bars */
export default function BarChart({ id, data, viewport, bars }: BarChartProps) {

  function onDataChanged(e: DataChangedEvent) {
    const highestVal = Math.max(...e.data);
    const barWidth = (viewport.width / e.data.length) - (DEFAULT_PADDING);
    const heightMultiplier = viewport.height / highestVal;

    console.log(heightMultiplier)
    e.svg.selectAll("#d3dataplots").data(e.data).enter().append("rect")
      .attr("id", "#d3dataplots")
      .attr("x", (d, i) => {
        return (DEFAULT_PADDING / 2) + (i * (barWidth + DEFAULT_PADDING))
      })
      .attr("y", (d) => {
        return viewport.height - (d * heightMultiplier)
      })
      .attr("width", barWidth)
      .attr("height", (d, i) => d * heightMultiplier)
      .attr("fill", bars?.color || DEFAULT_BAR_COLOR);

    e.svg.selectAll("#d3dataplots").data(e.data).enter().append("text")
      .attr("x", (d, i) => {
        return (DEFAULT_PADDING / 2) + (i * (barWidth + DEFAULT_PADDING))
          + barWidth / 2;
      })
      .attr("y", viewport.height - 20)
      .attr("fill", '#fff')
      .html((d) => d.toString());

    console.log(e.svg.selectAll("#d3dataplots"))
  }

  return <Chart id={id} viewport={viewport}
    onDataChanged={onDataChanged}
    data={data} />
}