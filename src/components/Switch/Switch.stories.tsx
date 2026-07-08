import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Forms / Switch',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Switch')

export { SwitchBasic as Basic } from './examples/switch-basic'
export { SwitchControlled as Controlled } from './examples/switch-controlled'
export { SwitchWithSizes as Sizes } from './examples/switch-with-sizes'
export { SwitchSizeTable as SizeTable } from './examples/switch-size-table'
export { SwitchVariantTable as Variants } from './examples/switch-variant-table'
export { SwitchWithDisabled as Disabled } from './examples/switch-with-disabled'
export { SwitchWithHookForm as HookForm } from './examples/switch-with-hook-form'
export { SwitchWithInvalid as Invalid } from './examples/switch-with-invalid'
export { SwitchWithThumbIndicator as ThumbIndicator } from './examples/switch-with-thumb-indicator'
export { SwitchWithTooltip as Tooltip } from './examples/switch-with-tooltip'
export { SwitchWithTrackIndicator as TrackIndicator } from './examples/switch-with-track-indicator'
