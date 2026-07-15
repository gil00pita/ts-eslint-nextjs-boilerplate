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
  title: 'Data Display / Marquee',
} satisfies Meta

export const Playground = createComponentPlayground('Marquee')

export { MarqueeAutoFill as AutoFill } from './examples/marquee-auto-fill'
export { MarqueeDiagonal as Diagonal } from './examples/marquee-diagonal'
export { MarqueeEdgeGradient as Edges } from './examples/marquee-edge-gradient'
export { MarqueeFiniteLoop as FiniteLoops } from './examples/marquee-finite-loop'
export { MarqueeImageGallery as ImageGallery } from './examples/marquee-image-gallery'
export { MarqueeMultiple as Multiple } from './examples/marquee-multiple'
export { MarqueeNewsTicker as NewsTicker } from './examples/marquee-news-ticker'
export { MarqueePauseInteractions as PauseOnInteraction } from './examples/marquee-pause-interactions'
export { MarqueeReverseDirection as ReverseDirection } from './examples/marquee-reverse-direction'
export { MarqueeRtl as Rtl } from './examples/marquee-rtl'
export { MarqueeVerticalAnimation as Vertical } from './examples/marquee-vertical-animation'
export { MarqueeWithSpeed as WithSpeed } from './examples/marquee-with-speed'
export { MarqueeWithStore as Store } from './examples/marquee-with-store'
export { MarqueeWithTestimonials as Testimonials } from './examples/marquee-with-testimonials'
