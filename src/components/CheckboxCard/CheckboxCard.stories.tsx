import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Checkbox Card',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('CheckboxCard')

export { CheckboxCardBasic as Basic } from './examples/checkbox-card-basic'
export { CheckboxCardWithDescription as Description } from './examples/checkbox-card-with-description'
export { CheckboxCardDisabled as Disabled } from './examples/checkbox-card-disabled'
export { CheckboxCardWithStates as States } from './examples/checkbox-card-with-states'
export { CheckboxCardWithAddon as Addon } from './examples/checkbox-card-with-addon'
export { CheckboxCardWithIcon as Icon } from './examples/checkbox-card-with-icon'
export { CheckboxCardVariantTable as Variants } from './examples/checkbox-card-variant-table'
export { CheckboxCardSizeTable as Sizes } from './examples/checkbox-card-size-table'
export { CheckboxCardWithGroup as Group } from './examples/checkbox-card-with-group'
export { CheckboxCardNoIndicator as NoIndicator } from './examples/checkbox-card-no-indicator'
