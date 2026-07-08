import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Data Display / Marquee',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Marquee')

export { MarqueeAutoFill as AutoFill } from './examples/marquee-auto-fill'
export { MarqueeReverseDirection as ReverseDirection } from './examples/marquee-reverse-direction'
export { MarqueeVerticalAnimation as Vertical } from './examples/marquee-vertical-animation'
export { MarqueeWithSpeed as WithSpeed } from './examples/marquee-with-speed'
export { MarqueePauseInteractions as PauseOnInteraction } from './examples/marquee-pause-interactions'
export { MarqueeWithStore as Store } from './examples/marquee-with-store'
export { MarqueeFiniteLoop as FiniteLoops } from './examples/marquee-finite-loop'
export { MarqueeEdgeGradient as Edges } from './examples/marquee-edge-gradient'
export { MarqueeMultiple as Multiple } from './examples/marquee-multiple'
export { MarqueeDiagonal as Diagonal } from './examples/marquee-diagonal'
export { MarqueeNewsTicker as NewsTicker } from './examples/marquee-news-ticker'
export { MarqueeImageGallery as ImageGallery } from './examples/marquee-image-gallery'
export { MarqueeWithTestimonials as Testimonials } from './examples/marquee-with-testimonials'
export { MarqueeRtl as Rtl } from './examples/marquee-rtl'
