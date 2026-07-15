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
  title: 'Typography / Heading',
} satisfies Meta

export const Playground = createComponentPlayground('Heading')

export { HeadingBasic as Basic } from './examples/heading-basic'
export { HeadingWithAsProp as AsProps } from './examples/heading-with-as-prop'
export { HeadingWithComposition as Composition } from './examples/heading-with-composition'
export { HeadingWithGradient as Gradient } from './examples/heading-with-gradient'
export { HeadingWithHighlight as Highlight } from './examples/heading-with-highlight'
export { HeadingWithSizes as Sizes } from './examples/heading-with-sizes'
export { HeadingWithWeights as Weights } from './examples/heading-with-weights'
