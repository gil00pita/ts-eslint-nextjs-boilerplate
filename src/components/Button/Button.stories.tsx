import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Buttons / Button',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Button')

export { ButtonBasic as Basic } from './examples/button-basic'
export { ButtonSizeTable as Sizes } from './examples/button-size-table'
export { ButtonVariantTable as Variants } from './examples/button-variant-table'
export { ButtonWithDisabled as Disabled } from './examples/button-with-disabled'
export { ButtonWithDisabledLink as DisabledLink } from './examples/button-with-disabled-link'
export { ButtonWithGroup as Group } from './examples/button-with-group'
export { ButtonWithGroupFlushed as GroupFlushed } from './examples/button-with-group-flushed'
export { ButtonWithIconComposition as IconComposition } from './examples/button-with-icon-composition'
export { ButtonWithIcons as Icon } from './examples/button-with-icons'
export { ButtonWithLoading as Loading } from './examples/button-with-loading'
export { ButtonWithLoadingToggle as LoadingToggle } from './examples/button-with-loading-toggle'
export { ButtonWithCustomSpinner as CustomSpinner } from './examples/button-with-custom-spinner'
export { ButtonWithSpinnerPlacement as SpinnerPlacement } from './examples/button-with-spinner-placement'
export { ButtonWithSplitMenu as SplitMenu } from './examples/button-with-split-menu'
export { ButtonWithRadius as Radius } from './examples/button-with-radius'
export { ButtonWithResponsiveSize as ResponsiveSize } from './examples/button-with-responsive-size'
export { ButtonWithStyleOverride as StyleOverrides } from './examples/button-with-style-override'
