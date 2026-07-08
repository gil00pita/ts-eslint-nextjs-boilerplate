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
  title: 'Overlays / HoverCard',
} satisfies Meta

export const Playground = createComponentPlayground('HoverCard')

export { HoverCardBasic as Basic } from './examples/hover-card-basic'
export { HoverCardControlled as Controlled } from './examples/hover-card-controlled'
export { HoverCardOpenFromDialog as OpenFromDialog } from './examples/hover-card-open-from-dialog'
export { HoverCardRTL as RTL } from './examples/hover-card-rtl'
export { HoverCardWithDelay as Delay } from './examples/hover-card-with-delay'
export { HoverCardWithPlacement as Placement } from './examples/hover-card-with-placement'
