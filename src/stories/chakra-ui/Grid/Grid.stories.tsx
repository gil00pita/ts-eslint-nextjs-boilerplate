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
  title: 'Layout / Grid',
} satisfies Meta

export const Playground = createComponentPlayground('Grid')

export { GridBasic as Basic } from './examples/grid-basic'
export { GridSpanningColumns as SpanningColumns } from './examples/grid-spanning-columns'
export { GridWithColSpan as ColSpan } from './examples/grid-with-col-span'
export { GridWithTemplateAreas as TemplateAreas } from './examples/grid-with-template-areas'
