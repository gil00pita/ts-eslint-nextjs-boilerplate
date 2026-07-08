import { chartStoryDecorators, chartStoryParameters } from '../story-layout'

export default {
  decorators: chartStoryDecorators,
  parameters: chartStoryParameters,
  title: 'Charts/Bar Segment',
}

export { BarSegmentBasic as Basic } from './examples/bar-segment-basic'
export { BarSegmentWithBarSize as BarSize } from './examples/bar-segment-with-bar-size'
export { BarSegmentWithLegend as Legend } from './examples/bar-segment-with-legend'
export { BarSegmentWithReference as Reference } from './examples/bar-segment-with-reference'
export { BarSegmentWithTooltip as Tooltip } from './examples/bar-segment-with-tooltip'
