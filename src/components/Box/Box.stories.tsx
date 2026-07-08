import type { Meta } from '@storybook/react-vite'

import { Box } from '@chakra-ui/react'

import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'

export default {
  decorators: [
    (Story) => (
      <Box p="4">
        <Story />
      </Box>
    ),
  ],
  title: 'Layout / Box',
} satisfies Meta

export const Playground = createComponentPlayground('Box')

export { BoxBasic as Basic } from './examples/box-basic'
export { BoxPropertyCard as Composition } from './examples/box-property-card'
export { BoxWithAsProp as AsProp } from './examples/box-with-as-prop'
export { BoxWithBorder as Border } from './examples/box-with-border'
export { BoxWithHideBelow as HideBelow } from './examples/box-with-hide-below'
export { BoxWithHideFrom as HideFrom } from './examples/box-with-hide-from'
export { BoxWithPseudoProps as PseudoProps } from './examples/box-with-pseudo-props'
export { BoxWithShadow as Shadow } from './examples/box-with-shadow'
