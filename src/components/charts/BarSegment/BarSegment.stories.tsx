import { chartStoryDecorators, chartStoryParameters } from "../story-layout"

export default {
	title: "Charts/Bar Segment",
	parameters: chartStoryParameters,
	decorators: chartStoryDecorators,
}

export { BarSegmentBasic as Basic } from "./examples/bar-segment-basic"
export { BarSegmentWithReference as Reference } from "./examples/bar-segment-with-reference"
export { BarSegmentWithLegend as Legend } from "./examples/bar-segment-with-legend"
export { BarSegmentWithBarSize as BarSize } from "./examples/bar-segment-with-bar-size"
export { BarSegmentWithTooltip as Tooltip } from "./examples/bar-segment-with-tooltip"
