import { chartStoryDecorators, chartStoryParameters } from "../story-layout"

export default {
	title: "Charts/Radial Chart",
	parameters: chartStoryParameters,
	decorators: chartStoryDecorators,
}

export { RadialChartBasic as Basic } from "./examples/radial-chart-basic"
export { RadialChartWithLegend as Legend } from "./examples/radial-chart-with-legend"
export { RadialChartWithLabel as Label } from "./examples/radial-chart-with-label"
