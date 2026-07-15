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
  title: 'Typography / Prose',
} satisfies Meta

export const Playground = createComponentPlayground('Prose')

export { ProseBasic as Basic } from './examples/prose-basic'
export { ProseSink as Sink } from './examples/prose-sink'
export { ProseWithBlockquote as Blockquote } from './examples/prose-with-blockquote'
export { ProseWithList as List } from './examples/prose-with-list'
export { ProseWithReactMarkdown as ReactMarkdown } from './examples/prose-with-react-markdown'
export { ProseWithTable as Table } from './examples/prose-with-table'
