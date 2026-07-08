import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Feedback / Loader',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Loader')

export { LoaderBasic as Basic } from './examples/loader-basic'
export { LoaderWithBadge as WithBadge } from './examples/loader-with-badge'
export { LoaderWithOverlay as WithOverlay } from './examples/loader-with-overlay'
