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
  title: 'Forms / Color Picker',
} satisfies Meta

export const Playground = createComponentPlayground('ColorPicker')

export { ColorPickerBasic as Basic } from './examples/color-picker-basic'
export { ColorPickerChangeEnd as ChangeEnd } from './examples/color-picker-change-end'
export { ColorPickerChannelSliderOnly as ChannelSliderOnly } from './examples/color-picker-channel-slider-only'
export { ColorPickerControlled as Controlled } from './examples/color-picker-controlled'
export { ColorPickerInline as Inline } from './examples/color-picker-inline'
export { ColorPickerInputOnly as InputOnly } from './examples/color-picker-input-only'
export { ColorPickerOpenFromDialog as OpenFromDialog } from './examples/color-picker-open-from-dialog'
export { ColorPickerSwatchOnly as SwatchOnly } from './examples/color-picker-swatch-only'
export { ColorPickerTriggerOnly as TriggerOnly } from './examples/color-picker-trigger-only'
export { ColorPickerWithChannelInput as ChannelInput } from './examples/color-picker-with-channel-input'
export { ColorPickerWithDisabled as Disabled } from './examples/color-picker-with-disabled'
export { ColorPickerWithFitContent as FitContent } from './examples/color-picker-with-fit-content'
export { ColorPickerWithFormat as Format } from './examples/color-picker-with-format'
export { ColorPickerWithHookForm as HookForm } from './examples/color-picker-with-hook-form'
export { ColorPickerWithReadonly as Readonly } from './examples/color-picker-with-readonly'
export { ColorPickerWithSaveSwatch as SaveSwatch } from './examples/color-picker-with-save-swatch'
export { ColorPickerWithSizes as Sizes } from './examples/color-picker-with-sizes'
export { ColorPickerWithSwatchAndInput as SwatchAndInput } from './examples/color-picker-with-swatch-and-input'
export { ColorPickerWithSwatches as Swatches } from './examples/color-picker-with-swatches'
export { ColorPickerWithSwatchesAndTrigger as SwatchesAndTrigger } from './examples/color-picker-with-swatches-and-trigger'
export { ColorPickerWithTriggerInInput as TriggerInInput } from './examples/color-picker-with-trigger-in-input'
export { ColorPickerWithVariants as Variants } from './examples/color-picker-with-variants'
