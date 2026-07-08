import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Utilities / Color Mode',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('ColorMode')

export { ColorModeBasic as Basic } from './examples/color-mode-basic'
export { ColorModeForced as Forced } from './examples/color-mode-forced'
export { ColorModeIconButton as IconButton } from './examples/color-mode-icon-button'
export { ColorModeValue as Value } from './examples/color-mode-value'
export { ColorModeValueFallback as ValueFallback } from './examples/color-mode-value-fallback'
