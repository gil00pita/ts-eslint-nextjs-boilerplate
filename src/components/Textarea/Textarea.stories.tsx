import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Forms / Textarea',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Textarea')

export { TextareaBasic as Basic } from './examples/textarea-basic'
export { TextareaSizeTable as Sizes } from './examples/textarea-size-table'
export { TextareaVariantTable as Variants } from './examples/textarea-variant-table'
export { TextareaWithAutoresize as Autoresize } from './examples/textarea-with-autoresize'
export { TextareaWithAutoresizeMaxRows as AutoresizeMaxRows } from './examples/textarea-with-autoresize-max-rows'
export { TextareaWithErrorText as ErrorText } from './examples/textarea-with-error-text'
export { TextareaWithField as Field } from './examples/textarea-with-field'
export { TextareaWithForm as Form } from './examples/textarea-with-form'
export { TextareaWithHelperText as HelperText } from './examples/textarea-with-helper-text'
export { TextareaWithHookForm as HookForm } from './examples/textarea-with-hook-form'
export { TextareaWithResize as Resize } from './examples/textarea-with-resize'
