import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Close Button',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('CloseButton')

export { CloseButtonBasic as Basic } from './examples/close-button-basic'
export { CloseButtonWithSizes as Sizes } from './examples/close-button-with-sizes'
export { CloseButtonWithVariants as Variants } from './examples/close-button-with-variants'
export { CloseButtonWithCustomIcon as CustomIcon } from './examples/close-button-with-custom-icon'
