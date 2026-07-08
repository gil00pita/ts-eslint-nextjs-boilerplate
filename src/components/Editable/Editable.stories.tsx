import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import { Box } from '@chakra-ui/react'
import type { Meta } from '@storybook/nextjs-vite'

export default {
  title: 'Components / Editable',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Editable')

export { EditableBasic as Basic } from './examples/editable-basic'
export { EditableControlled as Controlled } from './examples/editable-controlled'
export { EditableDisabled as Disabled } from './examples/editable-disabled'
export { EditableExplorerDemo as ExplorerDemo } from './examples/editable-explorer-demo'
export { EditableWithControls as WithControls } from './examples/editable-with-controls'
export { EditableWithCustomComponent as WithCustomComponent } from './examples/editable-with-custom-component'
export { EditableWithDoubleClick as WithDoubleClick } from './examples/editable-with-double-click'
export { EditableWithFinalFocus as WithFinalFocus } from './examples/editable-with-final-focus'
export { EditableWithStore as WithStore } from './examples/editable-with-store'
export { EditableWithTextarea as WithTextarea } from './examples/editable-with-textarea'
