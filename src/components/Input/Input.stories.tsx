import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Input',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Input')

export { InputBasic as Basic } from './examples/input-basic'
export { InputSizeTable as Sizes } from './examples/input-size-table'
export { InputVariantTable as Variants } from './examples/input-variant-table'
export { InputWithCardDetails as CardDetails } from './examples/input-with-card-details'
export { InputWithCardNumber as CardNumber } from './examples/input-with-card-number'
export { InputWithCharacterCounter as CharacterCounter } from './examples/input-with-character-counter'
export { InputWithClearButton as ClearButton } from './examples/input-with-clear-button'
export { InputWithEndAddon as EndAddon } from './examples/input-with-end-addon'
export { InputWithEndButton as EndButton } from './examples/input-with-end-button'
export { InputWithEndIcon as EndIcon } from './examples/input-with-end-icon'
export { InputWithEndText as EndText } from './examples/input-with-end-text'
export { InputWithErrorText as ErrorText } from './examples/input-with-error-text'
export { InputWithField as Field } from './examples/input-with-field'
export { InputWithFloatingLabel as FloatingLabel } from './examples/input-with-floating-label'
export { InputWithFocusErrorColor as FocusErrorColor } from './examples/input-with-focus-error-color'
export { InputWithHelperText as HelperText } from './examples/input-with-helper-text'
export { InputWithHookForm as HookForm } from './examples/input-with-hook-form'
export { InputWithKbd as Kbd } from './examples/input-with-kbd'
export { InputWithMask as Mask } from './examples/input-with-mask'
export { InputWithSelect as Select } from './examples/input-with-select'
export { InputWithStartAddon as StartAddon } from './examples/input-with-start-addon'
export { InputWithStartAndEndAddon as StartAndEndAddon } from './examples/input-with-start-and-end-addon'
export { InputWithStartAndEndText as StartAndEndText } from './examples/input-with-start-and-end-text'
export { InputWithStartElementEndAddon as StartElementEndAddon } from './examples/input-with-start-element-end-addon'
export { InputWithStartIcon as StartIcon } from './examples/input-with-start-icon'
export { InputWithStartText as StartText } from './examples/input-with-start-text'
