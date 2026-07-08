import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Disclosure / Carousel',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Carousel')

export { CarouselBasic as Basic } from './examples/carousel-basic'
export { CarouselControlled as Controlled } from './examples/carousel-controlled'
export { CarouselWithStore as Store } from './examples/carousel-with-store'
export { CarouselVertical as Vertical } from './examples/carousel-vertical'
export { CarouselWithFloatingArrow as FloatingArrow } from './examples/carousel-with-floating-arrow'
export { CarouselWithIndicators as Indicators } from './examples/carousel-with-indicators'
export { CarouselWithMouseDrag as MouseDrag } from './examples/carousel-with-mouse-drag'
export { CarouselWithProgressText as ProgressText } from './examples/carousel-with-progress-text'
export { CarouselSlidesPerPage as SlidesPerPage } from './examples/carousel-slides-per-page'
export { CarouselSlidesPerMove as SlidesPerMove } from './examples/carousel-slides-per-move'
export { CarouselSpacing as Spacing } from './examples/carousel-spacing'
export { CarouselVariableSize as VariableSize } from './examples/carousel-variable-size'
export { CarouselWithDialog as Dialog } from './examples/carousel-with-dialog'
export { CarouselWithThumbnails as Thumbnails } from './examples/carousel-with-thumbnails'
export { CarouselWithAutoplay as Autoplay } from './examples/carousel-with-autoplay'
export { CarouselWithImages as Images } from './examples/carousel-with-images'
export { CarouselComposition as Composition } from './examples/carousel-composition'
export { CarouselExplorerDemo as _Explorer } from './examples/carousel-explorer-demo'
