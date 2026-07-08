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
  title: 'Forms / Checkbox Card',
} satisfies Meta

export const Playground = createComponentPlayground('CheckboxCard')

export { CheckboxCardBasic as Basic } from './examples/checkbox-card-basic'
export { CheckboxCardDisabled as Disabled } from './examples/checkbox-card-disabled'
export { CheckboxCardNoIndicator as NoIndicator } from './examples/checkbox-card-no-indicator'
export { CheckboxCardSizeTable as Sizes } from './examples/checkbox-card-size-table'
export { CheckboxCardVariantTable as Variants } from './examples/checkbox-card-variant-table'
export { CheckboxCardWithAddon as Addon } from './examples/checkbox-card-with-addon'
export { CheckboxCardWithDescription as Description } from './examples/checkbox-card-with-description'
export { CheckboxCardWithGroup as Group } from './examples/checkbox-card-with-group'
export { CheckboxCardWithIcon as Icon } from './examples/checkbox-card-with-icon'
export { CheckboxCardWithStates as States } from './examples/checkbox-card-with-states'
