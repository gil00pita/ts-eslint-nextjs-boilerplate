import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Data Display / Table',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Table')

export { TableBasic as Basic } from './examples/table-basic'
export { TableSizeTable as Sizes } from './examples/table-size-table'
export { TableVariantTable as Variants } from './examples/table-variant-table'
export { TableWithCaption as Caption } from './examples/table-with-caption'
export { TableWithCaptionTop as CaptionTop } from './examples/table-with-caption-top'
export { TableWithColumnBorder as ColumnBorder } from './examples/table-with-column-border'
export { TableWithColumnGroup as ColumnGroup } from './examples/table-with-column-group'
export { TableWithInteractive as Interactive } from './examples/table-with-interactive'
export { TableWithNative as Native } from './examples/table-with-native'
export { TableWithOverflow as Overflow } from './examples/table-with-overflow'
export { TableWithPagination as Pagination } from './examples/table-with-pagination'
export { TableWithSelection as Selection } from './examples/table-with-selection'
export { TableWithSelectionActionBar as SelectionActionBar } from './examples/table-with-selection-action-bar'
export { TableWithStickyColumn as StickyColumn } from './examples/table-with-sticky-column'
export { TableWithStickyHeader as StickyHeader } from './examples/table-with-sticky-header'
export { TableWithStickyHeaderAndColumn as StickyHeaderAndColumn } from './examples/table-with-sticky-header-and-column'
export { TableWithStriped as Stripe } from './examples/table-with-striped'
export { TableWithTanstack as Tanstack } from './examples/table-with-tanstack'
