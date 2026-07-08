import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import { Box } from '@chakra-ui/react'
import type { Meta } from '@storybook/nextjs-vite'

const meta = {
  title: 'Utilities / Visually Hidden',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('VisuallyHidden')

export { VisuallyHiddenBasic as Basic } from './examples/visually-hidden-basic'
export { VisuallyHiddenWithInput as WithInput } from './examples/visually-hidden-with-input'
