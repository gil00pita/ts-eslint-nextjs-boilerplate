import { chartStoryDecorators, chartStoryParameters } from '../story-layout'

export default {
  decorators: chartStoryDecorators,
  parameters: chartStoryParameters,
  title: 'Charts/Pie Chart',
}

export { PieChartBasic as Basic } from './examples/pie-chart-basic'
export { PieChartNoStroke as NoStroke } from './examples/pie-chart-no-stroke'
export { PieChartWithLabelInside as LabelInside } from './examples/pie-chart-with-label-inside'
export { PieChartWithLabelOutside as LabelOutside } from './examples/pie-chart-with-label-outside'
export { PieChartWithLegend as Legend } from './examples/pie-chart-with-legend'
export { PieChartWithPointLabel as PointLabel } from './examples/pie-chart-with-point-label'
export { PieChartWithStartAngle as StartAngle } from './examples/pie-chart-with-start-angle'
