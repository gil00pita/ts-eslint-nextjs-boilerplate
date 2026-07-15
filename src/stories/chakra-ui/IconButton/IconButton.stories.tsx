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
  title: 'Buttons / Icon Button',
} satisfies Meta

export const Playground = createComponentPlayground('IconButton')

export { IconButtonBasic as Basic } from './examples/icon-button-basic'
export { IconButtonRounded as Rounded } from './examples/icon-button-rounded'
export { IconButtonWithColors as Colors } from './examples/icon-button-with-colors'
export { IconButtonWithSizes as Sizes } from './examples/icon-button-with-sizes'
export { IconButtonWithVariants as Variants } from './examples/icon-button-with-variants'
