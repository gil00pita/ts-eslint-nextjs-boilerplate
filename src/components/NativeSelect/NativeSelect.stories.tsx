import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Forms / Native Select',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('NativeSelect')

export { NativeSelectBasic as Basic } from './examples/native-select-basic'
export { NativeSelectControlled as Controlled } from './examples/native-select-controlled'
export { NativeSelectWithDisabled as Disabled } from './examples/native-select-with-disabled'
export { NativeSelectWithHookForm as HookForm } from './examples/native-select-with-hook-form'
export { NativeSelectWithInvalid as Invalid } from './examples/native-select-with-invalid'
export { NativeSelectWithInvalidRoot as InvalidRoot } from './examples/native-select-with-invalid-root'
export { NativeSelectWithSizes as Sizes } from './examples/native-select-with-sizes'
export { NativeSelectWithVariants as Variants } from './examples/native-select-with-variants'
export { NativeSelectWithInputGroup as InputGroup } from './examples/native-select-with-input-group'
