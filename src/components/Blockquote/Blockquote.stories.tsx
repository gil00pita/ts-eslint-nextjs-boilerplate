import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Blockquote',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Blockquote')

export { BlockquoteBasic as Basic } from './examples/blockquote-basic'
export { BlockquoteVariantTable as Variants } from './examples/blockquote-variant-table'
export { BlockquoteWithAvatar as Avatar } from './examples/blockquote-with-avatar'
export { BlockquoteWithCite as Cite } from './examples/blockquote-with-cite'
export { BlockquoteWithCustomIcon as CustomIcon } from './examples/blockquote-with-custom-icon'
export { BlockquoteWithIcon as Icon } from './examples/blockquote-with-icon'
export { BlockquoteWithJustify as Justify } from './examples/blockquote-with-justify'
