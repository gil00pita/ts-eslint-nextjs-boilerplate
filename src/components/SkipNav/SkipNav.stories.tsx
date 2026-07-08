import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Utilities / Skip Nav',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('SkipNav')

export { SkipNavBasic as Basic } from './examples/skip-nav-basic'
export { SkipNavWithContent as WithContent } from './examples/skip-nav-with-content'
export { SkipNavCustomId as CustomId } from './examples/skip-nav-custom-id'
