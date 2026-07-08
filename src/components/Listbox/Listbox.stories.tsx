import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Collections / Listbox',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Listbox')

export { ListboxBasic as Basic } from './examples/listbox-basic'
export { ListboxControlled as Controlled } from './examples/listbox-controlled'
export { ListboxDisabledItem as DisabledItem } from './examples/listbox-disabled-item'
export { ListboxExtendedSelect as ExtendedSelect } from './examples/listbox-extended-select'
export { ListboxGrouped as Grouped } from './examples/listbox-grouped'
export { ListboxHorizontal as Horizontal } from './examples/listbox-horizontal'
export { ListboxImageExplorer as ImageExplorer } from './examples/listbox-image-explorer'
export { ListboxMultiselect as Multiselect } from './examples/listbox-multiselect'
export { ListboxSelectAll as SelectAll } from './examples/listbox-select-all'
export { ListboxTransferList as TransferList } from './examples/listbox-transfer-list'
export { ListboxVirtualized as Virtualized } from './examples/listbox-virtualized'
export { ListboxWithCheckmark as Checkmark } from './examples/listbox-with-checkmark'
export { ListboxWithDescription as Description } from './examples/listbox-with-description'
export { ListboxWithDialog as Dialog } from './examples/listbox-with-dialog'
export { ListboxWithEmojiGrid as EmojiGrid } from './examples/listbox-with-emoji-grid'
export { ListboxWithIcon as Icon } from './examples/listbox-with-icon'
export { ListboxWithInput as Input } from './examples/listbox-with-input'
export { ListboxWithPopover as Popover } from './examples/listbox-with-popover'
export { ListboxWithStore as Store } from './examples/listbox-with-store'
