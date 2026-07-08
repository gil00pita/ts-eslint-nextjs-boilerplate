import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import { Box } from '@chakra-ui/react'
import type { Meta } from '@storybook/nextjs-vite'

const meta = {
  title: 'Components / Client Only',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('ClientOnly')

export { ClientOnlyBasic as Basic } from './examples/client-only-basic'
export { ClientOnlyRenderProp as RenderProp } from './examples/client-only-render-prop'
export { ClientOnlyWithFallback as WithFallback } from './examples/client-only-with-fallback'
