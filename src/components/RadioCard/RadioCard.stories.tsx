import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Radio Card',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('RadioCard')

export { RadioCardBasic as Basic } from './examples/radio-card-basic'
export { RadioCardCentered as Centered } from './examples/radio-card-centered'
export { RadioCardComposition as Composition } from './examples/radio-card-composition'
export { RadioCardWithAddon as Addon } from './examples/radio-card-with-addon'
export { RadioCardWithColors as Colors } from './examples/radio-card-with-colors'
export { RadioCardWithCustomIndicator as CustomIndicator } from './examples/radio-card-with-custom-indicator'
export { RadioCardWithIcon as Icon } from './examples/radio-card-with-icon'
export { RadioCardWithSizes as Sizes } from './examples/radio-card-with-sizes'
export { RadioCardWithVariants as Variants } from './examples/radio-card-with-variants'
export { RadioCardWithoutIndicator as WithoutIndicator } from './examples/radio-card-without-indicator'
export { RadioCardWithoutIndicatorVertical as WithoutIndicatorVertical } from './examples/radio-card-without-indicator-vertical'
export { RadioCardWithResponsiveOrientation as ResponsiveOrientation } from './examples/radio-card-with-responsive-orientation'
export { RadioCardWithDescription as Description } from './examples/radio-card-with-description'
