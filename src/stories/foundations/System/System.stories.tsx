import type { Meta } from '@storybook/react-vite'

import { Box } from '@chakra-ui/react'

export default {
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
  title: 'Utilities / System',
} satisfies Meta

export { SystemAlertRecipe as AlertRecipe } from './examples/alert-recipe'
export { SystemColorPalette as ColorPalette } from './examples/color-palette'
export { SystemFlexRecipe as FlexRecipe } from './examples/flex-recipe'
export { SystemInlineRecipe as InlineRecipe } from './examples/inline-recipe'
export { SystemInlineSlotRecipe as InlineSlotRecipe } from './examples/inline-slot-recipe'
export { SystemWithAnimation as Animation } from './examples/with-animation'
export { SystemWithAsChild as AsChild } from './examples/with-as-child'
export { WithCompoundBoolean as CompoundBoolean } from './examples/with-compound-boolean'
export { WithCompoundColorPalette as CompoundColorPalette } from './examples/with-compound-color-palette'
export { SystemWithUseRecipe as UseRecipe } from './examples/with-use-recipe'
export { SystemWithUseSlotRecipe as UseSlotRecipe } from './examples/with-use-slot-recipe'
