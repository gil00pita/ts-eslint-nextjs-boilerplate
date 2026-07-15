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
  title: 'Disclosure / Carousel',
} satisfies Meta

export const Playground = createComponentPlayground('Carousel')

export { CarouselBasic as Basic } from './examples/carousel-basic'
export { CarouselComposition as Composition } from './examples/carousel-composition'
export { CarouselControlled as Controlled } from './examples/carousel-controlled'
export { CarouselExplorerDemo as _Explorer } from './examples/carousel-explorer-demo'
export { CarouselSlidesPerMove as SlidesPerMove } from './examples/carousel-slides-per-move'
export { CarouselSlidesPerPage as SlidesPerPage } from './examples/carousel-slides-per-page'
export { CarouselSpacing as Spacing } from './examples/carousel-spacing'
export { CarouselVariableSize as VariableSize } from './examples/carousel-variable-size'
export { CarouselVertical as Vertical } from './examples/carousel-vertical'
export { CarouselWithAutoplay as Autoplay } from './examples/carousel-with-autoplay'
export { CarouselWithDialog as Dialog } from './examples/carousel-with-dialog'
export { CarouselWithFloatingArrow as FloatingArrow } from './examples/carousel-with-floating-arrow'
export { CarouselWithImages as Images } from './examples/carousel-with-images'
export { CarouselWithIndicators as Indicators } from './examples/carousel-with-indicators'
export { CarouselWithMouseDrag as MouseDrag } from './examples/carousel-with-mouse-drag'
export { CarouselWithProgressText as ProgressText } from './examples/carousel-with-progress-text'
export { CarouselWithStore as Store } from './examples/carousel-with-store'
export { CarouselWithThumbnails as Thumbnails } from './examples/carousel-with-thumbnails'
