import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import { Box } from '@chakra-ui/react'
import type { Meta } from '@storybook/nextjs-vite'

const meta = {
  title: 'Components / Image',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('Image')

export { ImageBasic as Basic } from './examples/image-basic'
export { ImageCircular as Circular } from './examples/image-circular'
export { ImageWithAspectRatio as WithAspectRatio } from './examples/image-with-aspect-ratio'
export { ImageWithFit as WithFit } from './examples/image-with-fit'
export { ImageWithHeight as WithHeight } from './examples/image-with-height'
export { ImageWithHtmlHeight as WithHtmlHeight } from './examples/image-with-html-height'
