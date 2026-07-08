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
  title: 'Layout / Absolute Center',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('AbsoluteCenter')

export { AbsoluteCenterBasic as Basic } from './examples/absolute-center-basic'
export { AbsoluteCenterWithAxis as WithAxis } from './examples/absolute-center-with-axis'
export { AbsoluteCenterWithContent as WithContent } from './examples/absolute-center-with-content'
export { AbsoluteCenterWithOverlay as WithOverlay } from './examples/absolute-center-with-overlay'
export { AbsoluteCenterWithRtl as WithRtl } from './examples/absolute-center-with-rtl'
