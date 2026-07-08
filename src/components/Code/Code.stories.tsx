import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Typography / Code',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Code')

export { CodeBasic as Basic } from './examples/code-basic'
export { CodeWithColors as Colors } from './examples/code-with-colors'
export { CodeSizeTable as Sizes } from './examples/code-size-table'
export { CodeVariantTable as Variants } from './examples/code-variant-table'
