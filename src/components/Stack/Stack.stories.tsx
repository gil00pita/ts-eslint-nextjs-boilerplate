import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Layout / Stack',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Stack')

export { StackBasic as Basic } from './examples/stack-basic'
export { StackHorizontal as Horizontal } from './examples/stack-horizontal'
export { StackWithHstack as HStack } from './examples/stack-with-hstack'
export { StackWithVstack as VStack } from './examples/stack-with-vstack'
export { StackWithSeparator as Separator } from './examples/stack-with-separator'
export { StackWithResponsiveDirection as ResponsiveDirection } from './examples/stack-with-responsive-direction'
export { StackWithCustomSeparator as CustomSeparator } from './examples/stack-with-custom-separator'
export { StackWithResponsiveSeparator as ResponsiveSeparator } from './examples/stack-with-responsive-separator'
