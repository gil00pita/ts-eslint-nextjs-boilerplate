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
  title: 'Overlays / createOverlay',
} satisfies Meta

export const Playground = createComponentPlayground('Overlay')

export { OverlayBasic as Basic } from './examples/overlay-basic'
export { OverlayWithAlert as Alert } from './examples/overlay-with-alert'
export { OverlayWithDrawer as Drawer } from './examples/overlay-with-drawer'
export { OverlayWithForm as Form } from './examples/overlay-with-form'
export { OverlayWithMenuItem as MenuItem } from './examples/overlay-with-menu-item'
export { OverlayWithReturnValue as ReturnValue } from './examples/overlay-with-return-value'
export { OverlayWithUpdate as Update } from './examples/overlay-with-update'
