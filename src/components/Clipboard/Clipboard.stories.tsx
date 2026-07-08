import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Clipboard',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Clipboard')

export { ClipboardBasic as Basic } from './examples/clipboard-basic'
export { ClipboardWithButton as Button } from './examples/clipboard-with-button'
export { ClipboardWithTimeout as Timeout } from './examples/clipboard-with-timeout'
export { ClipboardWithInput as Input } from './examples/clipboard-with-input'
export { ClipboardWithLink as Link } from './examples/clipboard-with-link'
