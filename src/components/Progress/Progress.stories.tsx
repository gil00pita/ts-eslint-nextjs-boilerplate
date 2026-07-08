import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Progress',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Progress')

export { ProgressBasic as Basic } from './examples/progress-basic'
export { ProgressComposition as Composition } from './examples/progress-composition'
export { ProgressSizeTable as Sizes } from './examples/progress-size-table'
export { ProgressVariantTable as Variants } from './examples/progress-variant-table'
export { ProgressWithAnimatedStripes as AnimatedStripes } from './examples/progress-with-animated-stripes'
export { ProgressWithColors as Colors } from './examples/progress-with-colors'
export { ProgressWithInlineLabel as InlineLabel } from './examples/progress-with-inline-label'
export { ProgressWithLabel as Label } from './examples/progress-with-label'
export { ProgressWithLabelInfo as LabelInfo } from './examples/progress-with-label-info'
export { ProgressWithStripes as Stripes } from './examples/progress-with-stripes'
