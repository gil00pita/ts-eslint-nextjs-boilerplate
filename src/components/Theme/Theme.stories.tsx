import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Foundations / Theme',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Theme')

export { ThemeBasic as Basic } from './examples/theme-basic'
export { ThemeNested as Nested } from './examples/theme-nested'
export { ThemeWithPortalled as Portalled } from './examples/theme-with-portalled'
