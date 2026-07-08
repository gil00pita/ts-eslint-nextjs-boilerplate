import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Layout / Float',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Float')

export { FloatBasic as Basic } from './examples/float-basic'
export { FloatWithOffsetX as OffsetX } from './examples/float-with-offset-x'
export { FloatWithOffsetY as OffsetY } from './examples/float-with-offset-y'
export { FloatWithOffset as Offset } from './examples/float-with-offset'
export { FloatWithPlacements as Placements } from './examples/float-with-placements'
export { FloatWithAvatar as Avatar } from './examples/float-with-avatar'
