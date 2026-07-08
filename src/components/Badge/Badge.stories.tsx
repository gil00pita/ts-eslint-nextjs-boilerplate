import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Data Display / Badge',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Badge')

export { BadgeBasic as Basic } from './examples/badge-basic'
export { BadgeSizeTable as Sizes } from './examples/badge-size-table'
export { BadgeVariantTable as Variants } from './examples/badge-variant-table'
export { BadgeWithContext as Context } from './examples/badge-with-context'
export { BadgeWithGroup as Group } from './examples/badge-with-group'
export { BadgeWithIcon as Icon } from './examples/badge-with-icon'
