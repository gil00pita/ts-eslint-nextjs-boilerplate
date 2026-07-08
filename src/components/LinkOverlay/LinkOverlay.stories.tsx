import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Typography / LinkOverlay',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('LinkOverlay')

export { LinkOverlayBasic as Basic } from './examples/link-overlay-basic'
export { LinkOverlayArticle as Article } from './examples/link-overlay-article'
