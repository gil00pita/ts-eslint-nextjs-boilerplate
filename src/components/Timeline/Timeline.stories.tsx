import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Data Display / Timeline',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Timeline')

export { TimelineAlternating as Alternating } from './examples/timeline-alternating'
export { TimelineBasic as Basic } from './examples/timeline-basic'
export { TimelineComposition as Composition } from './examples/timeline-composition'
export { TimelineWithContentBefore as ContentBefore } from './examples/timeline-with-content-before'
export { TimelineWithSizes as Sizes } from './examples/timeline-with-sizes'
export { TimelineWithVariants as Variants } from './examples/timeline-with-variants'
