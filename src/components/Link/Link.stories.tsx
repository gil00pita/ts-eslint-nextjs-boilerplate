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
  title: 'Typography / Link',
} satisfies Meta

export const Playground = createComponentPlayground('Link')

export { LinkBasic as Basic } from './examples/link-basic'
export { LinkVariantTable as Variants } from './examples/link-variant-table'
export { LinkWithinText as WithinText } from './examples/link-within-text'
