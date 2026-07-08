import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Hooks / createOverlay',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Overlay')

export { OverlayBasic as Basic } from './examples/overlay-basic'
export { OverlayWithAlert as Alert } from './examples/overlay-with-alert'
export { OverlayWithReturnValue as ReturnValue } from './examples/overlay-with-return-value'
export { OverlayWithUpdate as Update } from './examples/overlay-with-update'
export { OverlayWithDrawer as Drawer } from './examples/overlay-with-drawer'
export { OverlayWithForm as Form } from './examples/overlay-with-form'
export { OverlayWithMenuItem as MenuItem } from './examples/overlay-with-menu-item'
