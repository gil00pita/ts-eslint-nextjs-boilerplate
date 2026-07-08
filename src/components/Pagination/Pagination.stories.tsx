import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Pagination',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Pagination')

export { PaginationAsLink as AsLink } from './examples/pagination-as-link'
export { PaginationAttached as Attached } from './examples/pagination-attached'
export { PaginationBasic as Basic } from './examples/pagination-basic'
export { PaginationCompact as Compact } from './examples/pagination-compact'
export { PaginationControlled as Controlled } from './examples/pagination-controlled'
export { PaginationWithContent as Content } from './examples/pagination-with-content'
export { PaginationWithCountText as CountText } from './examples/pagination-with-count-text'
export { PaginationWithCustomFormat as CustomFormat } from './examples/pagination-with-custom-format'
export { PaginationWithSiblingCount as SiblingCount } from './examples/pagination-with-sibling-count'
export { PaginationWithSizes as Sizes } from './examples/pagination-with-sizes'
export { PaginationWithVariants as Variants } from './examples/pagination-with-variants'
