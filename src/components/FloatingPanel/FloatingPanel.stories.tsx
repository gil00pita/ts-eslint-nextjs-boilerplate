import type { Meta } from '@storybook/react-vite'

import { Box } from '@chakra-ui/react'

import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'

export default {
  decorators: [
    (Story) => (
      <Box minH="sm" p="10" position="relative">
        <Story />
      </Box>
    ),
  ],
  title: 'Overlays / FloatingPanel',
} satisfies Meta

export const Playground = createComponentPlayground('FloatingPanel')

export { FloatingPanelAnchorPosition as AnchorPosition } from './examples/floating-panel-anchor-position'
export { FloatingPanelBasic as Basic } from './examples/floating-panel-basic'
export { FloatingPanelBoundary as Boundary } from './examples/floating-panel-boundary'
export { FloatingPanelContext as Context } from './examples/floating-panel-context'
export { FloatingPanelControlledOpen as ControlledOpen } from './examples/floating-panel-controlled-open'
export { FloatingPanelControlledPosition as Position } from './examples/floating-panel-controlled-position'
export { FloatingPanelControlledSize as Size } from './examples/floating-panel-controlled-size'
export { FloatingPanelDisableDrag as DisableDrag } from './examples/floating-panel-disable-drag'
export { FloatingPanelDisableResize as DisableResize } from './examples/floating-panel-disable-resize'
export { FloatingPanelMinMax as MinMax } from './examples/floating-panel-min-max'
export { FloatingPanelMultiple as Multiple } from './examples/floating-panel-multiple'
export { FloatingPanelPreventOverflow as PreventOverflow } from './examples/floating-panel-prevent-overflow'
export { FloatingPanelResizeAxes as ResizeAxes } from './examples/floating-panel-resize-axes'
export { FloatingPanelRtl as Rtl } from './examples/floating-panel-rtl'
export { FloatingPanelStages as Stages } from './examples/floating-panel-stages'
export { FloatingPanelWithOverlay as Overlay } from './examples/floating-panel-with-overlay'
export { FloatingPanelWithStore as Store } from './examples/floating-panel-with-store'
