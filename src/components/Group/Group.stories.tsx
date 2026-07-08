import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import { Box } from '@chakra-ui/react'
import type { Meta } from '@storybook/nextjs-vite'

const meta = {
  title: 'Layout / Group',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('Group')

export { GroupBasic as Basic } from './examples/group-basic'
export { GroupWithAttached as WithAttached } from './examples/group-with-attached'
export { GroupWithButton as WithButton } from './examples/group-with-button'
export { GroupWithGrow as WithGrow } from './examples/group-with-grow'
