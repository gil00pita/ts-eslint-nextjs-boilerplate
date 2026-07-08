import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Typography / Link',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Link')

export { LinkBasic as Basic } from './examples/link-basic'
export { LinkVariantTable as Variants } from './examples/link-variant-table'
export { LinkWithinText as WithinText } from './examples/link-within-text'
