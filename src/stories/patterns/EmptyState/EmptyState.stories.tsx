import type { Meta } from '@storybook/react-vite'

import { Box } from '@chakra-ui/react'

export default {
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
  title: 'Feedback / Empty State',
} satisfies Meta

export { EmptyStateBasic as Basic } from './examples/empty-state-basic'
export { EmptyStateSizes as Sizes } from './examples/empty-state-sizes'
export { EmptyStateWithAction as Action } from './examples/empty-state-with-action'
export { EmptyStateWithList as List } from './examples/empty-state-with-list'
