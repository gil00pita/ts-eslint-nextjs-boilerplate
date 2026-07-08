import type { Meta } from "@storybook/react-vite"

import { chartStoryDecorators, chartStoryParameters } from "../story-layout"

export default {
	title: "Charts/Donut Chart",
	parameters: chartStoryParameters,
	decorators: chartStoryDecorators,
} satisfies Meta

export { DonutChartBasic as Basic } from "./examples/donut-chart-basic"
export { DonutChartWithPointLabel as PointLabel } from "./examples/donut-chart-with-point-label"
export { DonutChartWithCenteredText as CenteredText } from "./examples/donut-chart-with-centered-text"
export { DonutChartWithAnglePadding as AnglePadding } from "./examples/donut-chart-with-angle-padding"
export { DonutChartWithStartAndEndAngle as StartAndEndAngle } from "./examples/donut-chart-with-start-and-end-angle"
export { DonutChartWithDetachedSegment as DetachedSegment } from "./examples/donut-chart-with-detached-segment"
export { DonutChartWithOtherLabel as OtherLabel } from "./examples/donut-chart-with-other-label"
