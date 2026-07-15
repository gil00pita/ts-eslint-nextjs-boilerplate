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
  title: 'Utilities / Skip Nav',
} satisfies Meta

export const Playground = createComponentPlayground('SkipNav')

export { SkipNavBasic as Basic } from './examples/skip-nav-basic'
export { SkipNavCustomId as CustomId } from './examples/skip-nav-custom-id'
export { SkipNavWithContent as WithContent } from './examples/skip-nav-with-content'
