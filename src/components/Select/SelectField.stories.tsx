import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Collections / Select',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Select')

export { SelectAsyncLoading as AsyncLoading } from './examples/select-async-loading'
export { SelectBasic as Basic } from './examples/select-basic'
export { SelectControlled as Controlled } from './examples/select-controlled'
export { SelectOpenFromDialog as OpenFromDialog } from './examples/select-open-from-dialog'
export { SelectOpenFromPopover as OpenFromPopover } from './examples/select-open-from-popover'
export { SelectWithAvatar as Avatar } from './examples/select-with-avatar'
export { SelectWithClear as Clear } from './examples/select-with-clear'
export { SelectWithCountry as Country } from './examples/select-with-country'
export { SelectWithDisabled as Disabled } from './examples/select-with-disabled'
export { SelectWithDisabledOption as DisabledOption } from './examples/select-with-disabled-option'
export { SelectWithHookForm as HookForm } from './examples/select-with-hook-form'
export { SelectWithIconButton as IconButton } from './examples/select-with-icon-button'
export { SelectWithInvalid as Invalid } from './examples/select-with-invalid'
export { SelectWithItemDescription as ItemDescription } from './examples/select-with-item-description'
export { SelectWithMultiple as Multiple } from './examples/select-with-multiple'
export { SelectWithNativeForm as NativeForm } from './examples/select-with-native-form'
export { SelectWithOptionGroup as OptionGroup } from './examples/select-with-option-group'
export { SelectWithOverflow as Overflow } from './examples/select-with-overflow'
export { SelectWithPositioning as Positioning } from './examples/select-with-positioning'
export { SelectWithSizes as Sizes } from './examples/select-with-sizes'
export { SelectWithVariants as Variants } from './examples/select-with-variants'
export { SelectWithColorPalette as ColorPalette } from './examples/select-with-color-palette'
export { SelectVirtualized as Virtualized } from './examples/select-virtualized'
