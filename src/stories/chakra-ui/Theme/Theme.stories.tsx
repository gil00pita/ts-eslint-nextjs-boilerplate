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
  title: 'Utilities / Theme',
} satisfies Meta

export const Playground = createComponentPlayground('Theme')

export { ThemeBasic as Basic } from './examples/theme-basic'
export { ThemeNested as Nested } from './examples/theme-nested'
export { ThemeWithPortalled as Portalled } from './examples/theme-with-portalled'
