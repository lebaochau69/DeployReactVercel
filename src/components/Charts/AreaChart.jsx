import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
  Point,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const AreaChart = () => {
  const { currentMode } = useStateContext();
  let arrColor = ["#ea7a57", "#7bb4eb", "#7f84e8"];
  return (
    <div>
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        legendSettings={{ textStyle: currentMode === "Dark" ? ({ color: "#7bb4eb" }) : '' }}
        background={currentMode === "Dark" ? "#33373E" : "#FFF"}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective
              fill={arrColor[Point.index]}
              key={index}
              {...item}
            />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default AreaChart;
