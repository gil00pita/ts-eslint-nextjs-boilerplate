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
  title: 'Forms / Tags Input',
} satisfies Meta

export const Playground = createComponentPlayground('TagsInput')

export { TagsInputBasic as Basic } from './examples/tags-input-basic'
export { TagsInputControlled as Controlled } from './examples/tags-input-controlled'
export { TagsInputDisabled as Disabled } from './examples/tags-input-disabled'
export { TagsInputEditable as Editable } from './examples/tags-input-editable'
export { TagsInputExplorerDemo as _Explorer } from './examples/tags-input-explorer-demo'
export { TagsInputInvalid as Invalid } from './examples/tags-input-invalid'
export { TagsInputReadOnly as ReadOnly } from './examples/tags-input-read-only'
export { TagsInputValidation as Validation } from './examples/tags-input-validation'
export { TagsInputWithBlurBehavior as BlurBehavior } from './examples/tags-input-with-blur-behavior'
export { TagsInputWithClear as Clear } from './examples/tags-input-with-clear'
export { TagsInputWithColors as Colors } from './examples/tags-input-with-colors'
export { TagsInputWithCombobox as Combobox } from './examples/tags-input-with-combobox'
export { TagsInputWithDelimiter as Delimiter } from './examples/tags-input-with-delimiter'
export { TagsInputWithField as Field } from './examples/tags-input-with-field'
export { TagsInputWithForm as Form } from './examples/tags-input-with-form'
export { TagsInputWithLongTags as LongTags } from './examples/tags-input-with-long-tags'
export { TagsInputWithMax as Max } from './examples/tags-input-with-max'
export { TagsInputWithPaste as Paste } from './examples/tags-input-with-paste'
export { TagsInputWithSizes as Sizes } from './examples/tags-input-with-sizes'
export { TagsInputWithStore as Store } from './examples/tags-input-with-store'
export { TagsInputWithVariants as Variants } from './examples/tags-input-with-variants'
