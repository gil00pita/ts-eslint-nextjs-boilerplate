import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Status',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Status')

export { StatusBasic as Basic } from './examples/status-basic'
export { StatusWithLabel as Label } from './examples/status-with-label'
export { StatusSizeTable as Sizes } from './examples/status-size-table'
