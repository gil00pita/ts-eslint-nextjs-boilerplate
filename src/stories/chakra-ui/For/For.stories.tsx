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
  title: 'Utilities / For',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('For')

export { ForBasic as Basic } from './examples/for-basic'
export { ForWithFallback as WithFallback } from './examples/for-with-fallback'
export { ForWithObject as WithObject } from './examples/for-with-object'
