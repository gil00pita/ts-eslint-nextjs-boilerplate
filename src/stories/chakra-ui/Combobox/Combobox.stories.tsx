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
  title: 'Collections / Combobox',
} satisfies Meta

export const Playground = createComponentPlayground('Combobox')

export { ComboboxAutoHighlight as AutoHighlight } from './examples/combobox-autohighlight'
export { ComboboxBasic as Basic } from './examples/combobox-basic'
export { ComboboxColorPicker as ColorPicker } from './examples/combobox-color-picker'
export { ComboboxControlled as Controlled } from './examples/combobox-controlled'
export { ComboboxMinCharacter as MinCharacter } from './examples/combobox-min-character'
export { ComboboxOpenControlled as OpenControlled } from './examples/combobox-open-controlled'
export { ComboboxOpenFromPopover as OpenFromPopover } from './examples/combobox-open-from-popover'
export { ComboboxOpenOnClick as OpenOnClick } from './examples/combobox-open-on-click'
export { ComboboxRehydrateValue as RehydrateValue } from './examples/combobox-rehydrate-value'
export { ComboboxVirtualized as Virtualized } from './examples/combobox-virtualized'
export { ComboboxWithAsyncContent as Async } from './examples/combobox-with-async-content'
export { ComboboxWithCreateable as Createable } from './examples/combobox-with-createable'
export { ComboboxWithCustomAnimation as CustomAnimation } from './examples/combobox-with-custom-animation'
export { ComboboxWithCustomFilter as CustomFilter } from './examples/combobox-with-custom-filter'
export { ComboboxWithCustomItem as CustomItem } from './examples/combobox-with-custom-item'
export { ComboboxWithCustomObject as CustomObject } from './examples/combobox-with-custom-object'
export { ComboboxWithDisabled as Disabled } from './examples/combobox-with-disabled'
export { ComboboxWithDisabledItem as DisabledItem } from './examples/combobox-with-disabled-item'
export { ComboboxWithField as Field } from './examples/combobox-with-field'
export { ComboboxWithFormSubmit as FormSubmit } from './examples/combobox-with-form-submit'
export { ComboboxWithHighlight as Highlight } from './examples/combobox-with-highlight'
export { ComboboxWithHookForm as HookForm } from './examples/combobox-with-hook-form'
export { ComboboxWithInputGroup as InputGroup } from './examples/combobox-with-input-group'
export { ComboboxWithInputInContent as InputInContent } from './examples/combobox-with-input-in-content'
export { ComboboxWithInvalid as Invalid } from './examples/combobox-with-invalid'
export { ComboboxWithLimit as Limit } from './examples/combobox-with-limit'
export { ComboboxWithLinks as Links } from './examples/combobox-with-links'
export { ComboboxWithMultiple as Multiple } from './examples/combobox-with-multiple'
export { ComboboxWithOptionGroup as OptionGroup } from './examples/combobox-with-option-group'
export { ComboboxWithPositioning as Positioning } from './examples/combobox-with-positioning'
export { ComboboxWithSelectionBehavior as SelectionBehavior } from './examples/combobox-with-selection-behavior'
export { ComboboxWithSizes as Sizes } from './examples/combobox-with-sizes'

export { ComboboxWithStore as Store } from './examples/combobox-with-store'
export { ComboboxWithVariants as Variants } from './examples/combobox-with-variants'
