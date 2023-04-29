import * as d3 from 'd3';
import { useEffect } from 'react';

export interface ChartConfig {
  data: number[]
}

export default function Chart({ data }: ChartConfig) {
  useEffect(() => {
    const svg = d3.select("#x").append("svg").attr("width", 700).attr("height", 300);
    svg.selectAll("rect").data(data).enter().append("rect")
    .attr("x", (d, i) => i * 70)
    .attr("y", 0)
    .attr("width", 65)
    .attr("height", (d, i) => d)
    .attr("fill", "green");
  });
  return <div id="x"></div>
}