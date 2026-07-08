import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Collections / Combobox',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Combobox')

export { ComboboxBasic as Basic } from './examples/combobox-basic'
export { ComboboxAutoHighlight as AutoHighlight } from './examples/combobox-autohighlight'
export { ComboboxControlled as Controlled } from './examples/combobox-controlled'
export { ComboboxWithMultiple as Multiple } from './examples/combobox-with-multiple'
export { ComboboxWithOptionGroup as OptionGroup } from './examples/combobox-with-option-group'
export { ComboboxMinCharacter as MinCharacter } from './examples/combobox-min-character'
export { ComboboxWithDisabled as Disabled } from './examples/combobox-with-disabled'
export { ComboboxWithDisabledItem as DisabledItem } from './examples/combobox-with-disabled-item'
export { ComboboxWithAsyncContent as Async } from './examples/combobox-with-async-content'
export { ComboboxOpenFromPopover as OpenFromPopover } from './examples/combobox-open-from-popover'
export { ComboboxRehydrateValue as RehydrateValue } from './examples/combobox-rehydrate-value'
export { ComboboxWithCustomItem as CustomItem } from './examples/combobox-with-custom-item'
export { ComboboxOpenControlled as OpenControlled } from './examples/combobox-open-controlled'
export { ComboboxWithHighlight as Highlight } from './examples/combobox-with-highlight'
export { ComboboxWithSizes as Sizes } from './examples/combobox-with-sizes'
export { ComboboxWithVariants as Variants } from './examples/combobox-with-variants'
export { ComboboxWithLinks as Links } from './examples/combobox-with-links'
export { ComboboxOpenOnClick as OpenOnClick } from './examples/combobox-open-on-click'
export { ComboboxWithStore as Store } from './examples/combobox-with-store'
export { ComboboxVirtualized as Virtualized } from './examples/combobox-virtualized'
export { ComboboxWithLimit as Limit } from './examples/combobox-with-limit'
export { ComboboxWithPositioning as Positioning } from './examples/combobox-with-positioning'
export { ComboboxWithCustomAnimation as CustomAnimation } from './examples/combobox-with-custom-animation'
export { ComboboxWithInvalid as Invalid } from './examples/combobox-with-invalid'
export { ComboboxWithInputGroup as InputGroup } from './examples/combobox-with-input-group'
export { ComboboxWithField as Field } from './examples/combobox-with-field'
export { ComboboxWithCustomFilter as CustomFilter } from './examples/combobox-with-custom-filter'
export { ComboboxWithCustomObject as CustomObject } from './examples/combobox-with-custom-object'
export { ComboboxWithInputInContent as InputInContent } from './examples/combobox-with-input-in-content'
export { ComboboxWithFormSubmit as FormSubmit } from './examples/combobox-with-form-submit'
export { ComboboxWithHookForm as HookForm } from './examples/combobox-with-hook-form'
export { ComboboxWithCreateable as Createable } from './examples/combobox-with-createable'

export { ComboboxWithSelectionBehavior as SelectionBehavior } from './examples/combobox-with-selection-behavior'
export { ComboboxColorPicker as ColorPicker } from './examples/combobox-color-picker'
