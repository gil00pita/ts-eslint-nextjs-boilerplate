import { chartStoryDecorators, chartStoryParameters } from "../story-layout"

export default {
	title: "Charts/Scatter Chart",
	parameters: chartStoryParameters,
	decorators: chartStoryDecorators,
}

export { ScatterChartBasic as Basic } from "./examples/scatter-chart-basic"
export { ScatterChartLegend as Legend } from "./examples/scatter-chart-legend"
export { ScatterChartMultiple as Multiple } from "./examples/scatter-chart-multiple"
export { ScatterChartConnectDots as ConnectDots } from "./examples/scatter-chart-connect-dots"
export { ScatterChartTrendLine as TrendLine } from "./examples/scatter-chart-trend-line"
