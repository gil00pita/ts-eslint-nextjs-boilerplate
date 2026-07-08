import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Forms / Checkbox',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Checkbox')

export { CheckboxBasic as Basic } from './examples/checkbox-basic'
export { CheckboxControlled as Controlled } from './examples/checkbox-controlled'
export { CheckboxSizeTable as Sizes } from './examples/checkbox-size-table'
export { CheckboxVariantTable as Variants } from './examples/checkbox-variant-table'
export { CheckboxWithColors as Colors } from './examples/checkbox-with-colors'
export { CheckboxWithCustomIcon as CustomIcon } from './examples/checkbox-with-custom-icon'
export { CheckboxWithDescription as Description } from './examples/checkbox-with-description'
export { CheckboxWithForm as Form } from './examples/checkbox-with-form'
export { CheckboxWithGroup as Group } from './examples/checkbox-with-group'
export { CheckboxWithGroupHookForm as GroupHookForm } from './examples/checkbox-with-group-hook-form'
export { CheckboxWithHookForm as HookForm } from './examples/checkbox-with-hook-form'
export { CheckboxIndeterminate as Indeterminate } from './examples/checkbox-indeterminate'
export { CheckboxWithLink as Link } from './examples/checkbox-with-link'
export { CheckboxWithStates as States } from './examples/checkbox-with-states'
export { CheckboxWithStore as Store } from './examples/checkbox-with-store'
export { CheckboxWithLabelPosition as LabelPosition } from './examples/checkbox-with-label-position'
