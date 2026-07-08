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
  title: 'Typography / Text',
} satisfies Meta

export const Playground = createComponentPlayground('Text')

export { TextBasic as Basic } from './examples/text-basic'
export { TextWithAsProp as AsProps } from './examples/text-with-as-prop'
export { TextWithLineClamp as LineClamp } from './examples/text-with-line-clamp'
export { TextWithSizes as Sizes } from './examples/text-with-sizes'
export { TextWithTruncate as Truncate } from './examples/text-with-truncate'
export { TextWithWeights as Weights } from './examples/text-with-weights'
