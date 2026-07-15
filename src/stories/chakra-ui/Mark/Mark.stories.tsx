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
  title: 'Typography / Mark',
} satisfies Meta

export const Playground = createComponentPlayground('Mark')

export { MarkBasic as Basic } from './examples/mark-basic'
export { MarkWithVariants as Variants } from './examples/mark-with-variants'
