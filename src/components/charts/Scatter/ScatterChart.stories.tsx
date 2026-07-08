import { chartStoryDecorators, chartStoryParameters } from '../story-layout'

export default {
  decorators: chartStoryDecorators,
  parameters: chartStoryParameters,
  title: 'Charts/Scatter Chart',
}

export { ScatterChartBasic as Basic } from './examples/scatter-chart-basic'
export { ScatterChartConnectDots as ConnectDots } from './examples/scatter-chart-connect-dots'
export { ScatterChartLegend as Legend } from './examples/scatter-chart-legend'
export { ScatterChartMultiple as Multiple } from './examples/scatter-chart-multiple'
export { ScatterChartTrendLine as TrendLine } from './examples/scatter-chart-trend-line'
