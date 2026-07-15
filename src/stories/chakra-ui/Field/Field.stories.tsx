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
  title: 'Forms / Field',
} satisfies Meta

export const Playground = createComponentPlayground('Field')

export { FieldBasic as Basic } from './examples/field-basic'
export { FieldHorizontal as Horizontal } from './examples/field-horizontal'
export { FieldWithDisabled as Disabled } from './examples/field-with-disabled'
export { FieldWithErrorIcon as ErrorIcon } from './examples/field-with-error-icon'
export { FieldWithErrorText as ErrorText } from './examples/field-with-error-text'
export { FieldWithHelperText as HelperText } from './examples/field-with-helper-text'
export { FieldWithNativeSelect as NativeSelect } from './examples/field-with-native-select'
export { FieldWithOptional as Optional } from './examples/field-with-optional'
export { FieldWithRequired as Required } from './examples/field-with-required'
