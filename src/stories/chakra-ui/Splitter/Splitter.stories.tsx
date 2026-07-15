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
  title: 'Layout / Splitter',
} satisfies Meta

export const Playground = createComponentPlayground('Splitter')

export { SplitterBasic as Basic } from './examples/splitter-basic'
export { SplitterCollapsible as Collapsible } from './examples/splitter-collapsible'
export { SplitterConditionalRendering as ConditionalRendering } from './examples/splitter-conditional-rendering'
export { SplitterControlled as Controlled } from './examples/splitter-controlled'
export { SplitterDisabled as Disabled } from './examples/splitter-disabled'
export { SplitterDynamicPanel as DynamicPanel } from './examples/splitter-dynamic-panel'
export { SplitterExplorerDemo as _Explorer } from './examples/splitter-explorer-demo'
export { SplitterIdeLayout as IdeLayout } from './examples/splitter-ide-layout'
export { SplitterKeyboardResize as KeyboardResize } from './examples/splitter-keyboard-resize'
export { SplitterMinMaxConstraints as MinMaxConstraints } from './examples/splitter-min-max-constraints'
export { SplitterMultiplePanels as MultiplePanels } from './examples/splitter-multiple-panels'
export { SplitterNested as Nested } from './examples/splitter-nested'
export { SplitterResetOnDoubleClick as ResetOnDoubleClick } from './examples/splitter-reset-on-double-click'
export { SplitterResizeEvents as ResizeEvents } from './examples/splitter-resize-events'
export { SplitterResponsiveOrientation as ResponsiveOrientation } from './examples/splitter-responsive-orientation'
export { SplitterSeparatorOnly as SeparatorOnly } from './examples/splitter-separator-only'
export { SplitterVertical as Vertical } from './examples/splitter-vertical'
export { SplitterWithStorage as Storage } from './examples/splitter-with-storage'
export { SplitterWithStore as Store } from './examples/splitter-with-store'
