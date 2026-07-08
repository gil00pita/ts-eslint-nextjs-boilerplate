import type { Meta } from '@storybook/react-vite'

import { chartStoryDecorators, chartStoryParameters } from '../story-layout'

export default {
  decorators: chartStoryDecorators,
  parameters: chartStoryParameters,
  title: 'Charts/Donut Chart',
} satisfies Meta

export { DonutChartBasic as Basic } from './examples/donut-chart-basic'
export { DonutChartWithAnglePadding as AnglePadding } from './examples/donut-chart-with-angle-padding'
export { DonutChartWithCenteredText as CenteredText } from './examples/donut-chart-with-centered-text'
export { DonutChartWithDetachedSegment as DetachedSegment } from './examples/donut-chart-with-detached-segment'
export { DonutChartWithOtherLabel as OtherLabel } from './examples/donut-chart-with-other-label'
export { DonutChartWithPointLabel as PointLabel } from './examples/donut-chart-with-point-label'
export { DonutChartWithStartAndEndAngle as StartAndEndAngle } from './examples/donut-chart-with-start-and-end-angle'
