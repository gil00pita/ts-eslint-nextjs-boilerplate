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
  title: 'Data Display / Tag',
} satisfies Meta

export const Playground = createComponentPlayground('Tag')

export { TagBasic as Basic } from './examples/tag-basic'
export { TagSizeTable as Sizes } from './examples/tag-size-table'
export { TagVariantTable as Variants } from './examples/tag-variant-table'
export { TagWithAvatar as Avatar } from './examples/tag-with-avatar'
export { TagWithClose as Close } from './examples/tag-with-close'
export { TagWithColors as Colors } from './examples/tag-with-colors'
export { TagWithOverflow as Overflow } from './examples/tag-with-overflow'
