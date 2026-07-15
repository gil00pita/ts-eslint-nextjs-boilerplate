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
  title: 'Typography / Code',
} satisfies Meta

export const Playground = createComponentPlayground('Code')

export { CodeBasic as Basic } from './examples/code-basic'
export { CodeSizeTable as Sizes } from './examples/code-size-table'
export { CodeVariantTable as Variants } from './examples/code-variant-table'
export { CodeWithColors as Colors } from './examples/code-with-colors'
