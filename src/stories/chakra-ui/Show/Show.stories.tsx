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
  title: 'Utilities / Show',
} satisfies Meta

export const Playground = createComponentPlayground('Show')

export { ShowBasic as Basic } from './examples/show-basic'
export { ShowWithFallback as WithFallback } from './examples/show-with-fallback'
export { ShowWithRenderProp as WithRenderProp } from './examples/show-with-render-prop'
