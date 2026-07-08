import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Overlays / Drawer',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Drawer')

export { DrawerBasic as Basic } from './examples/drawer-basic'
export { DrawerWithContext as Context } from './examples/drawer-with-context'
export { DrawerWithCustomContainer as CustomContainer } from './examples/drawer-with-custom-container'
export { DrawerWithHeaderActions as HeaderActions } from './examples/drawer-with-header-actions'
export { DrawerWithInitialFocus as InitialFocus } from './examples/drawer-with-initial-focus'
export { DrawerWithOffset as Offset } from './examples/drawer-with-offset'
export { DrawerWithPlacement as Placement } from './examples/drawer-with-placement'
export { DrawerWithConditionalVariants as ConditionalVariants } from './examples/drawer-with-conditional-variants'
export { DrawerWithSizes as Sizes } from './examples/drawer-with-sizes'
export { DrawerNonModal as NonModal } from './examples/drawer-non-modal'
