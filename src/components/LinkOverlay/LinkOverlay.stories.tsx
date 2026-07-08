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
  title: 'Typography / LinkOverlay',
} satisfies Meta

export const Playground = createComponentPlayground('LinkOverlay')

export { LinkOverlayArticle as Article } from './examples/link-overlay-article'
export { LinkOverlayBasic as Basic } from './examples/link-overlay-basic'
