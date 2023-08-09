import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  LineSeries,
  Inject,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryYAxis,
  LinePrimaryXAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <div>
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        tooltip={{ enable: true }}
        legendSettings={{ textStyle: currentMode === "Dark" ? ({ color: "#7bb4eb" }) : '' }}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;
