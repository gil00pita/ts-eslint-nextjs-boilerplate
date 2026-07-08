import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Layout / ScrollArea',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('ScrollArea')

export { ScrollAreaBasic as Basic } from './examples/scroll-area-basic'
export { ScrollAreaBothDirections as BothDirections } from './examples/scroll-area-both-directions'
export { ScrollAreaHorizontal as Horizontal } from './examples/scroll-area-horizontal'
export { ScrollAreaScrollToPosition as ScrollToPosition } from './examples/scroll-area-scroll-to-position'
export { ScrollAreaScrollToSide as ScrollToSide } from './examples/scroll-area-scroll-to-side'
export { ScrollAreaStickToBottom as StickToBottom } from './examples/scroll-area-stick-to-bottom'
export { ScrollAreaVirtualization as Virtualization } from './examples/scroll-area-virtualization'
export { ScrollAreaWithMenu as WithMenu } from './examples/scroll-area-with-menu'
export { ScrollAreaWithRtl as RTL } from './examples/scroll-area-with-rtl'
export { ScrollAreaWithScrollShadow as ScrollShadow } from './examples/scroll-area-with-scroll-shadow'
export { ScrollAreaWithSizes as Sizes } from './examples/scroll-area-with-sizes'
export { ScrollAreaWithStore as Store } from './examples/scroll-area-with-store'
export { ScrollAreaWithThumbStyling as ThumbStyling } from './examples/scroll-area-with-thumb-styling'
export { ScrollAreaWithVariants as Variants } from './examples/scroll-area-with-variants'
