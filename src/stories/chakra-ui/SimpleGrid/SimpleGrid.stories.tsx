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
  title: 'Layout / SimpleGrid',
} satisfies Meta

export const Playground = createComponentPlayground('SimpleGrid')

export { SimpleGridBasic as Basic } from './examples/simple-grid-basic'
export { SimpleGridWithAutofit as AutoFit } from './examples/simple-grid-with-autofit'
export { SimpleGridWithColSpan as ColSpan } from './examples/simple-grid-with-col-span'
export { SimpleGridWithColumns as Columns } from './examples/simple-grid-with-columns'
export { SimpleGridWithRowAndColGap as RowColGap } from './examples/simple-grid-with-row-and-col-gap'
