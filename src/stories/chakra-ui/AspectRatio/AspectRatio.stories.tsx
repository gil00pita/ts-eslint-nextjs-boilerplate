import type { Meta } from '@storybook/react-vite'

import { Box } from '@chakra-ui/react'

import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'

export default {
  decorators: [
    (Story) => (
      <Box p="4">
        <Story />
      </Box>
    ),
  ],
  title: 'Layout / AspectRatio',
} satisfies Meta

export const Playground = createComponentPlayground('AspectRatio')

export { AspectRatioResponsive as Responsive } from './examples/aspect-ratio-responsive'
export { AspectRatioWithImage as Image } from './examples/aspect-ratio-with-image'
export { AspectRatioWithMap as Map } from './examples/aspect-ratio-with-map'
export { AspectRatioWithVideo as Video } from './examples/aspect-ratio-with-video'
