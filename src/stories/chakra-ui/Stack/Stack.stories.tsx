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
  title: 'Layout / Stack',
} satisfies Meta

export const Playground = createComponentPlayground('Stack')

export { StackBasic as Basic } from './examples/stack-basic'
export { StackHorizontal as Horizontal } from './examples/stack-horizontal'
export { StackWithCustomSeparator as CustomSeparator } from './examples/stack-with-custom-separator'
export { StackWithHstack as HStack } from './examples/stack-with-hstack'
export { StackWithResponsiveDirection as ResponsiveDirection } from './examples/stack-with-responsive-direction'
export { StackWithResponsiveSeparator as ResponsiveSeparator } from './examples/stack-with-responsive-separator'
export { StackWithSeparator as Separator } from './examples/stack-with-separator'
export { StackWithVstack as VStack } from './examples/stack-with-vstack'
