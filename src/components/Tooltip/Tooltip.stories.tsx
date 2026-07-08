import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Overlays / Tooltip',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Tooltip')

export { TooltipBasic as Basic } from './examples/tooltip-basic'
export { TooltipControlled as Controlled } from './examples/tooltip-controlled'
export { TooltipControlledMultiple as ControlledMultiple } from './examples/tooltip-controlled-multiple'
export { TooltipMultiple as Multiple } from './examples/tooltip-multiple'
export { TooltipWithArrow as Arrow } from './examples/tooltip-with-arrow'
export { TooltipWithAvatar as WithAvatar } from './examples/tooltip-with-avatar'
export { TooltipWithCheckbox as WithCheckbox } from './examples/tooltip-with-checkbox'
export { TooltipWithCustomBg as CustomBg } from './examples/tooltip-with-custom-bg'
export { TooltipWithDelay as Delay } from './examples/tooltip-with-delay'
export { TooltipWithDialog as WithDialog } from './examples/tooltip-with-dialog'
export { TooltipWithDisabled as Disabled } from './examples/tooltip-with-disabled'
export { TooltipWithInteractive as Interactive } from './examples/tooltip-with-interactive'
export { TooltipWithMenuItem as WithMenuItem } from './examples/tooltip-with-menu-item'
export { TooltipWithMenuTrigger as WithMenuTrigger } from './examples/tooltip-with-menu-trigger'
export { TooltipWithOffset as Offset } from './examples/tooltip-with-offset'
export { TooltipWithPlacement as Placement } from './examples/tooltip-with-placement'
export { TooltipWithStore as WithStore } from './examples/tooltip-with-store'
export { TooltipWithSwitch as WithSwitch } from './examples/tooltip-with-switch'
export { TooltipWithTab as WithTab } from './examples/tooltip-with-tab'
