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
  title: 'Typography / List',
} satisfies Meta

export const Playground = createComponentPlayground('List')

export { ListBasic as Basic } from './examples/list-basic'
export { ListNested as Nested } from './examples/list-nested'
export { ListOrdered as Ordered } from './examples/list-ordered'
export { ListWithIcon as Icon } from './examples/list-with-icon'
export { ListWithMarkerStyle as MarkerStyle } from './examples/list-with-marker-style'
