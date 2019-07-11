import { styled } from "office-ui-fabric-react/lib/Utilities";
import {
  IScatterPlotProps,
  IScatterPlotStyleProps,
  IScatterPlotStyles
} from "./ScatterPlot.types";
import { ScatterPlotBase } from "./ScatterPlot.base";
import { getStyles } from "./ScatterPlot.styles";

// Create a ScatterPlot variant which uses these default styles and this styled subcomponent.
export const ScatterPlot: React.FunctionComponent<IScatterPlotProps> = styled<
  IScatterPlotProps,
  IScatterPlotStyleProps,
  IScatterPlotStyles
>(ScatterPlotBase, getStyles);
