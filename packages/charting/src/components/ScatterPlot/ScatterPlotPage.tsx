import * as React from "react";

import {
  ComponentPage,
  ExampleCard,
  IComponentDemoPageProps,
  PropertiesTableSet
} from "@uifabric/example-app-base";

import { ScatterPlotBasicExample } from "./examples/ScatterPlot.Basic.Example";
import { ScatterPlotStyledExample } from "./examples/ScatterPlot.Styled.Example";
import { ScatterPlotMultipleExample } from "./examples/ScatterPlot.Multiple.Example";

const ScatterPlotBasicExampleCode = require("!raw-loader!@uifabric/charting/src/components/ScatterPlot/examples/ScatterPlot.Basic.Example.tsx") as string;
const ScatterPlotStyledExampleCode = require("!raw-loader!@uifabric/charting/src/components/ScatterPlot/examples/ScatterPlot.Styled.Example.tsx") as string;
const MultipleScatterPlotExampleCode = require("!raw-loader!@uifabric/charting/src/components/ScatterPlot/examples/ScatterPlot.Multiple.Example.tsx") as string;

export class ScatterPlotPage extends React.Component<
  IComponentDemoPageProps,
  {}
> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="ScatterPlot"
        componentName="ScatterPlotExample"
        exampleCards={
          <div>
            <ExampleCard
              title="ScatterPlot basic"
              code={ScatterPlotBasicExampleCode}
            >
              <ScatterPlotBasicExample />
            </ExampleCard>
            <ExampleCard
              title="ScatterPlot styled"
              code={ScatterPlotStyledExampleCode}
            >
              <ScatterPlotStyledExample />
            </ExampleCard>
            <ExampleCard
              title="Multiple Scatter Plot"
              code={MultipleScatterPlotExampleCode}
            >
              <ScatterPlotMultipleExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[
              require<
                string
              >("!raw-loader!@uifabric/charting/src/components/ScatterPlot/ScatterPlot.types.ts")
            ]}
          />
        }
        /* tslint:disable:max-line-length */
        overview={
          <div>
            <p>ScatterPlot description</p>
          </div>
        }
        /* tslint:enable:max-line-length */
        bestPractices={<div />}
        dos={
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
        donts={
          <div>
            <ul>
              <li />
            </ul>
          </div>
        }
        isHeaderVisible={this.props.isHeaderVisible}
      />
    );
  }
}
