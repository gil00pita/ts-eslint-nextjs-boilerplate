import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Kbd',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Kbd')

export { KbdBasic as Basic } from './examples/kbd-basic'
export { KbdFunctionKeys as FunctionKeys } from './examples/kbd-function-keys'
export { KbdSizeTable as Sizes } from './examples/kbd-size-table'
export { KbdVariantTable as Variants } from './examples/kbd-variant-table'
export { KbdWithCombinations as Combinations } from './examples/kbd-with-combinations'
