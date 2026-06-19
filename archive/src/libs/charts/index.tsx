import * as d3 from 'd3';
import { useEffect } from 'react';

const DEFAULT_BGCOLOR = "#000"

export interface DataChangedEvent {
  svg: d3.Selection<d3.BaseType, unknown, HTMLElement, any>,
  data: number[]
}

/** Represents a viewport information */
export interface Viewport {
  /** Width of the viewport */
  width: number,
  /** Height of the viewport */
  height: number,
  /** Background color of the viewport (defaults to black)*/
  bgcolor?: string,
}

export interface ChartProps {
  /** A unique ID to identify against other elements in the DOM */
  id: string,
  /** The series of numeric values to present */
  data: number[],
  /** The viewport's configuration */
  viewport: Viewport,
  /** A callback function that is triggered when data changes */
  onDataChanged: (event: DataChangedEvent) => void,
}

/** Represents a basic Chart component */
export default function Chart({ id, viewport, data, onDataChanged }: ChartProps) {
  useEffect(() => {
    const svg = d3.select(`#${id}`);
    svg.selectAll('*').remove();
    svg.append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("fill", viewport.bgcolor || DEFAULT_BGCOLOR);
    if (onDataChanged) onDataChanged({ svg, data });
  }, [data, id]);

  return <svg id={id} width="100%" height="auto" viewBox={`0 0 ${viewport.width} ${viewport.height}`}>
    <></>
  </svg>
}
