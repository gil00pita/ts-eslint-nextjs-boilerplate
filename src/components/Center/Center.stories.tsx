import { Box } from '@chakra-ui/react'

import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'

export default {
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
  title: 'Layout / Center',
}

export const Playground = createComponentPlayground('Center')

export { CenterBasic as Basic } from './examples/center-basic'
export { CenterWithAbsolute as Absolute } from './examples/center-with-absolute'
export { CenterWithIcons as Icons } from './examples/center-with-icons'
export { CenterWithInline as Inline } from './examples/center-with-inline'
export { CenterWithSquare as Square } from './examples/center-with-square'
