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
  title: 'Typography / Em',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('Em')

export { EmBasic as Basic } from './examples/em-basic'
