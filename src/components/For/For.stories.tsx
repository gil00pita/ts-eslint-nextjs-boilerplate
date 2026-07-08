import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import { Box } from '@chakra-ui/react'
import type { Meta } from '@storybook/nextjs-vite'

const meta = {
  title: 'Utilities / For',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('For')

export { ForBasic as Basic } from './examples/for-basic'
export { ForWithFallback as WithFallback } from './examples/for-with-fallback'
export { ForWithObject as WithObject } from './examples/for-with-object'
