import type { Meta } from '@storybook/nextjs-vite'

import { Box } from '@chakra-ui/react'

import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'

const meta = {
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
  title: 'Layout / Group',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('Group')

export { GroupBasic as Basic } from './examples/group-basic'
export { GroupWithAttached as WithAttached } from './examples/group-with-attached'
export { GroupWithButton as WithButton } from './examples/group-with-button'
export { GroupWithGrow as WithGrow } from './examples/group-with-grow'
