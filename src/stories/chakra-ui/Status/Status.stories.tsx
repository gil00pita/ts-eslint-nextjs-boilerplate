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
  title: 'Feedback / Status',
} satisfies Meta

export const Playground = createComponentPlayground('Status')

export { StatusBasic as Basic } from './examples/status-basic'
export { StatusSizeTable as Sizes } from './examples/status-size-table'
export { StatusWithLabel as Label } from './examples/status-with-label'
