import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Overlays / HoverCard',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('HoverCard')

export { HoverCardBasic as Basic } from './examples/hover-card-basic'
export { HoverCardControlled as Controlled } from './examples/hover-card-controlled'
export { HoverCardOpenFromDialog as OpenFromDialog } from './examples/hover-card-open-from-dialog'
export { HoverCardWithDelay as Delay } from './examples/hover-card-with-delay'
export { HoverCardWithPlacement as Placement } from './examples/hover-card-with-placement'
export { HoverCardRTL as RTL } from './examples/hover-card-rtl'
