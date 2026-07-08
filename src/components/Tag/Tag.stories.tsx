import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Tag',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Tag')

export { TagBasic as Basic } from './examples/tag-basic'
export { TagWithAvatar as Avatar } from './examples/tag-with-avatar'
export { TagWithClose as Close } from './examples/tag-with-close'
export { TagWithColors as Colors } from './examples/tag-with-colors'
export { TagVariantTable as Variants } from './examples/tag-variant-table'
export { TagSizeTable as Sizes } from './examples/tag-size-table'
export { TagWithOverflow as Overflow } from './examples/tag-with-overflow'
