import type { Meta } from '@storybook/react-vite'

import { Box } from '@chakra-ui/react'

import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'

export default {
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
  title: 'Feedback / Progress Circle',
} satisfies Meta

export const Playground = createComponentPlayground('ProgressCircle')

export { ProgressCircleBasic as Basic } from './examples/progress-circle-basic'
export { ProgressCircleIndeterminate as Indeterminate } from './examples/progress-circle-indeterminate'
export { ProgressCircleWithColors as Colors } from './examples/progress-circle-with-colors'
export { ProgressCircleWithRangeColor as RangeColor } from './examples/progress-circle-with-range-color'
export { ProgressCircleWithRoundCap as RoundCap } from './examples/progress-circle-with-round-cap'
export { ProgressCircleWithSizes as Sizes } from './examples/progress-circle-with-sizes'
export { ProgressCircleWithThickness as CustomThickness } from './examples/progress-circle-with-thickness'
export { ProgressCircleWithValueText as ValueText } from './examples/progress-circle-with-value-text'
