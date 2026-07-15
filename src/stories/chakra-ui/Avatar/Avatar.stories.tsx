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
  title: 'Data Display / Avatar',
} satisfies Meta

export const Playground = createComponentPlayground('Avatar')

export { AvatarBasic as Basic } from './examples/avatar-basic'
export { AvatarGroupWithStacking as GroupStacking } from './examples/avatar-group-with-stacking'
export { AvatarPersona as Persona } from './examples/avatar-persona'
export { AvatarSizeTable as Sizes } from './examples/avatar-size-table'
export { AvatarVariantTable as Variants } from './examples/avatar-variant-table'
export { AvatarWithBadge as Badge } from './examples/avatar-with-badge'
export { AvatarWithColors as Colors } from './examples/avatar-with-colors'
export { AvatarWithFallback as Fallback } from './examples/avatar-with-fallback'
export { AvatarWithGroup as Group } from './examples/avatar-with-group'
export { AvatarWithOverflow as Overflow } from './examples/avatar-with-overflow'
export { AvatarWithRandomColor as RandomColor } from './examples/avatar-with-random-color'
export { AvatarWithShape as Shape } from './examples/avatar-with-shape'
export { AvatarWithStore as Store } from './examples/avatar-with-store'
