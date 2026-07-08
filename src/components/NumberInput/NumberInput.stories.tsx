import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / NumberInput',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('NumberInput')

export { NumberInputBasic as Basic } from './examples/number-input-basic'
export { NumberInputControlled as Controlled } from './examples/number-input-controlled'
export { NumberInputWithDisabled as Disabled } from './examples/number-input-with-disabled'
export { NumberInputWithField as Field } from './examples/number-input-with-field'
export { NumberInputWithFormatOptions as FormatOptions } from './examples/number-input-with-format-options'
export { NumberInputWithHookForm as HookForm } from './examples/number-input-with-hook-form'
export { NumberInputWithInvalid as Invalid } from './examples/number-input-with-invalid'
export { NumberInputWithMinMax as MinMax } from './examples/number-input-with-min-max'
export { NumberInputWithMouseWheel as MouseWheel } from './examples/number-input-with-mouse-wheel'
export { NumberInputWithScrubber as Scrubber } from './examples/number-input-with-scrubber'
export { NumberInputWithSizes as Sizes } from './examples/number-input-with-sizes'
export { NumberInputWithStep as Step } from './examples/number-input-with-step'
export { NumberInputWithStepper as Stepper } from './examples/number-input-with-stepper'
export { NumberInputWithElement as Element } from './examples/number-input-with-element'
