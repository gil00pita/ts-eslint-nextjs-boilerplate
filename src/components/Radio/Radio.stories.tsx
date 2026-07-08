import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Radio',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Radio')

export { RadioBasic as Basic } from './examples/radio-basic'
export { RadioControlled as Controlled } from './examples/radio-controlled'
export { RadioSizeTable as Sizes } from './examples/radio-size-table'
export { RadioVariantTable as Variants } from './examples/radio-variant-table'
export { RadioWithColors as Colors } from './examples/radio-with-colors'
export { RadioWithHookForm as HookForm } from './examples/radio-with-hook-form'
export { RadioWithVariants as DocsVariants } from './examples/radio-with-variants'
