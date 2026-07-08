import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Color Swatch',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('ColorSwatch')

export { ColorSwatchBasic as Basic } from './examples/color-swatch-basic'
export { ColorSwatchMixed as Mixed } from './examples/color-swatch-mixed'
export { ColorSwatchPalette as Palette } from './examples/color-swatch-palette'
export { ColorSwatchWithAlpha as WithAlpha } from './examples/color-swatch-with-alpha'
export { ColorSwatchWithBadge as WithBadge } from './examples/color-swatch-with-badge'
export { ColorSwatchWithSizes as WithSizes } from './examples/color-swatch-with-sizes'
export { ColorSwatchWithTransparent as WithTransparent } from './examples/color-swatch-with-transparent'
