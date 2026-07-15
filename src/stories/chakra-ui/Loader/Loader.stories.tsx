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
  title: 'Feedback / Loader',
} satisfies Meta

export const Playground = createComponentPlayground('Loader')

export { LoaderBasic as Basic } from './examples/loader-basic'
export { LoaderWithBadge as WithBadge } from './examples/loader-with-badge'
export { LoaderWithOverlay as WithOverlay } from './examples/loader-with-overlay'
