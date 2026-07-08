import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / List',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('List')

export { ListBasic as Basic } from './examples/list-basic'
export { ListNested as Nested } from './examples/list-nested'
export { ListOrdered as Ordered } from './examples/list-ordered'
export { ListWithIcon as Icon } from './examples/list-with-icon'
export { ListWithMarkerStyle as MarkerStyle } from './examples/list-with-marker-style'
