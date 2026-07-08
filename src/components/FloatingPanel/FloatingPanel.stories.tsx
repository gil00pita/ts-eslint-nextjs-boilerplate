import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Overlays / FloatingPanel',
  decorators: [
    (Story) => (
      <Box p="10" minH="sm" position="relative">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('FloatingPanel')

export { FloatingPanelBasic as Basic } from './examples/floating-panel-basic'
export { FloatingPanelAnchorPosition as AnchorPosition } from './examples/floating-panel-anchor-position'
export { FloatingPanelBoundary as Boundary } from './examples/floating-panel-boundary'
export { FloatingPanelControlledPosition as Position } from './examples/floating-panel-controlled-position'
export { FloatingPanelControlledSize as Size } from './examples/floating-panel-controlled-size'
export { FloatingPanelDisableDrag as DisableDrag } from './examples/floating-panel-disable-drag'
export { FloatingPanelDisableResize as DisableResize } from './examples/floating-panel-disable-resize'
export { FloatingPanelResizeAxes as ResizeAxes } from './examples/floating-panel-resize-axes'
export { FloatingPanelMinMax as MinMax } from './examples/floating-panel-min-max'
export { FloatingPanelControlledOpen as ControlledOpen } from './examples/floating-panel-controlled-open'
export { FloatingPanelWithStore as Store } from './examples/floating-panel-with-store'
export { FloatingPanelStages as Stages } from './examples/floating-panel-stages'
export { FloatingPanelMultiple as Multiple } from './examples/floating-panel-multiple'
export { FloatingPanelWithOverlay as Overlay } from './examples/floating-panel-with-overlay'
export { FloatingPanelPreventOverflow as PreventOverflow } from './examples/floating-panel-prevent-overflow'
export { FloatingPanelContext as Context } from './examples/floating-panel-context'
export { FloatingPanelRtl as Rtl } from './examples/floating-panel-rtl'
