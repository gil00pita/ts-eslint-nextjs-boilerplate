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
  title: 'Layout / Float',
} satisfies Meta

export const Playground = createComponentPlayground('Float')

export { FloatBasic as Basic } from './examples/float-basic'
export { FloatWithAvatar as Avatar } from './examples/float-with-avatar'
export { FloatWithOffset as Offset } from './examples/float-with-offset'
export { FloatWithOffsetX as OffsetX } from './examples/float-with-offset-x'
export { FloatWithOffsetY as OffsetY } from './examples/float-with-offset-y'
export { FloatWithPlacements as Placements } from './examples/float-with-placements'
