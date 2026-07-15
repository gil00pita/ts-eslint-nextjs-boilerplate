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
  title: 'Utilities / Presence',
} satisfies Meta

export const Playground = createComponentPlayground('Presence')

export { PresenceFade as Fade } from './examples/presence-fade'
export { PresenceLazyMount as LazyMount } from './examples/presence-lazy-mount'
export { PresenceScaleFade as ScaleFade } from './examples/presence-scale-fade'
export { PresenceSlide as Slide } from './examples/presence-slide'
export { PresenceSlideFade as SlideFade } from './examples/presence-slide-fade'
export { PresenceUnmountOnExit as UnmountOnExit } from './examples/presence-unmount-on-exit'
