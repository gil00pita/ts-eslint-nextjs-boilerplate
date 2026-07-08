import { chartStoryDecorators, chartStoryParameters } from "../story-layout"

export default {
	title: "Charts/Sparkline",
	parameters: chartStoryParameters,
	decorators: chartStoryDecorators,
}

export { SparklineBarChart as BarChart } from "./examples/sparkline-bar-chart"
export { SparklineBasic as Basic } from "./examples/sparkline-basic"
export { SparklineCompositionStock as Stock } from "./examples/sparkline-composition-stock"
export { SparklineLineChart as LineChart } from "./examples/sparkline-line-chart"
export { SparklineWithGradient as Gradient } from "./examples/sparkline-with-gradient"
export { SparklineWithInteraction as Interaction } from "./examples/sparkline-with-interaction"
export { SparklineWithReference as Reference } from "./examples/sparkline-with-reference"
export { SparklineCompositionStat as Stat } from "./examples/sparkline-composition-stat"
