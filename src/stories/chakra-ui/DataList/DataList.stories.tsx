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
  title: 'Data Display / Data List',
} satisfies Meta

export const Playground = createComponentPlayground('DataList')

export { DataListBasic as Basic } from './examples/data-list-basic'
export { DataListSizeTable as Sizes } from './examples/data-list-size-table'
export { DataListWithInfo as Info } from './examples/data-list-with-info'
export { DataListWithOrientation as Orientation } from './examples/data-list-with-orientation'
export { DataListWithSeparator as Separator } from './examples/data-list-with-separator'
export { DataListWithVariants as Variants } from './examples/data-list-with-variants'
