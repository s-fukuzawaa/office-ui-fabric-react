import * as React from "react";
import {
  IChartProps,
  IScatterPlotPoints,
  IScatterPlotProps,
  ScatterPlot
} from "@uifabric/charting";
import { DefaultPalette } from "office-ui-fabric-react/lib/Styling";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

interface IRootStyles {
  height: string;
  width: string;
}

export class ScatterPlotStyledExample extends React.Component<{}, {}> {
  constructor(props: IScatterPlotProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <div>{this._styledExample()}</div>;
  }

  private _styledExample(): JSX.Element {
    const points: IScatterPlotPoints[] = [
      {
        data: [
          { x: new Date("2018/01/06"), y: 10 },
          { x: new Date("2018/01/16"), y: 18 },
          { x: new Date("2018/01/20"), y: 24 },
          { x: new Date("2018/01/24"), y: 35 },
          { x: new Date("2018/01/26"), y: 35 },
          { x: new Date("2018/01/29"), y: 38 }
        ],
        legend: "Week",
        color: DefaultPalette.blue
      }
    ];

    const data: IChartProps = {
      chartTitle: "Scatter Plot",
      lineChartData: points
    };
    const rootStyle: IRootStyles = { width: "700px", height: "300px" };
    return (
      <div className={mergeStyles(rootStyle)}>
        <ScatterPlot data={data} strokeWidth={4} />
      </div>
    );
  }
}
