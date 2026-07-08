import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Splitter',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Splitter')

export { SplitterBasic as Basic } from './examples/splitter-basic'
export { SplitterVertical as Vertical } from './examples/splitter-vertical'
export { SplitterMultiplePanels as MultiplePanels } from './examples/splitter-multiple-panels'
export { SplitterControlled as Controlled } from './examples/splitter-controlled'
export { SplitterWithStore as Store } from './examples/splitter-with-store'
export { SplitterCollapsible as Collapsible } from './examples/splitter-collapsible'
export { SplitterKeyboardResize as KeyboardResize } from './examples/splitter-keyboard-resize'
export { SplitterWithStorage as Storage } from './examples/splitter-with-storage'
export { SplitterNested as Nested } from './examples/splitter-nested'
export { SplitterDisabled as Disabled } from './examples/splitter-disabled'
export { SplitterConditionalRendering as ConditionalRendering } from './examples/splitter-conditional-rendering'
export { SplitterDynamicPanel as DynamicPanel } from './examples/splitter-dynamic-panel'
export { SplitterIdeLayout as IdeLayout } from './examples/splitter-ide-layout'
export { SplitterSeparatorOnly as SeparatorOnly } from './examples/splitter-separator-only'
export { SplitterResponsiveOrientation as ResponsiveOrientation } from './examples/splitter-responsive-orientation'
export { SplitterResetOnDoubleClick as ResetOnDoubleClick } from './examples/splitter-reset-on-double-click'
export { SplitterResizeEvents as ResizeEvents } from './examples/splitter-resize-events'
export { SplitterMinMaxConstraints as MinMaxConstraints } from './examples/splitter-min-max-constraints'
export { SplitterExplorerDemo as _Explorer } from './examples/splitter-explorer-demo'
