import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Separator',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Separator')

export { SeparatorBasic as Basic } from './examples/separator-basic'
export { SeparatorVertical as Vertical } from './examples/separator-vertical'
export { SeparatorWithLabel as Label } from './examples/separator-with-label'
export { SeparatorWithResponsiveOrientation as ResponsiveOrientation } from './examples/separator-with-responsive-orientation'
export { SeparatorWithSizes as Sizes } from './examples/separator-with-sizes'
export { SeparatorWithVariants as Variants } from './examples/separator-with-variants'
