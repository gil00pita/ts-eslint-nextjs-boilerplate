import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import { Box } from '@chakra-ui/react'
import type { Meta } from '@storybook/nextjs-vite'

const meta = {
  title: 'Layout / Wrap',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('Wrap')

export { WrapBasic as Basic } from './examples/wrap-basic'
export { WrapResponsive as Responsive } from './examples/wrap-responsive'
export { WrapWithAlign as WithAlign } from './examples/wrap-with-align'
export { WrapWithGap as WithGap } from './examples/wrap-with-gap'
export { WrapWithJustify as WithJustify } from './examples/wrap-with-justify'
export { WrapWithRowColumnGap as WithRowColumnGap } from './examples/wrap-with-row-column-gap'
