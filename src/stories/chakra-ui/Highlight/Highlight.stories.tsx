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
  title: 'Typography / Highlight',
} satisfies Meta

export const Playground = createComponentPlayground('Highlight')

export { HighlightBasic as Basic } from './examples/highlight-basic'
export { HighlightMultiple as Multiple } from './examples/highlight-multiple'
export { HighlightSearchQuery as SearchQuery } from './examples/highlight-search-query'
export { HighlightWithCustomStyle as CustomStyle } from './examples/highlight-with-custom-style'
export { HighlightWithSquiggle as Squiggle } from './examples/highlight-with-squiggle'
