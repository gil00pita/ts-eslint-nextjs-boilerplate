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
  title: 'Utilities / Visually Hidden',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('VisuallyHidden')

export { VisuallyHiddenBasic as Basic } from './examples/visually-hidden-basic'
export { VisuallyHiddenWithInput as WithInput } from './examples/visually-hidden-with-input'
