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
  title: 'Overlays / Menu',
} satisfies Meta

export const Playground = createComponentPlayground('Menu')

export { MenuBasic as Basic } from './examples/menu-basic'
export { MenuControlled as Controlled } from './examples/menu-controlled'
export { MenuOpenFromDialog as OpenFromDialog } from './examples/menu-open-from-dialog'
export { MenuWithAnchorRect as AnchorRect } from './examples/menu-with-anchor-rect'
export { MenuWithAvatar as WithAvatar } from './examples/menu-with-avatar'
export { MenuWithCheckboxItems as CheckboxItems } from './examples/menu-with-checkbox-items'
export { MenuWithCommand as Command } from './examples/menu-with-command'
export { MenuWithContextTrigger as ContextTrigger } from './examples/menu-with-context-trigger'
export { MenuWithDangerItem as DangerItem } from './examples/menu-with-danger-item'
export { MenuWithGroup as Group } from './examples/menu-with-group'
export { MenuWithGroupDynamic as GroupDynamic } from './examples/menu-with-group-dynamic'
export { MenuWithHideWhenDetached as HideWhenDetached } from './examples/menu-with-hide-when-detached'
export { MenuWithIconAndCommand as IconAndCommand } from './examples/menu-with-icon-and-command'
export { MenuWithLinks as Links } from './examples/menu-with-links'
export { MenuWithMixedLayout as MixedLayout } from './examples/menu-with-mixed-layout'
export { MenuWithOverflow as Overflow } from './examples/menu-with-overflow'
export { MenuWithPlacement as Placement } from './examples/menu-with-placement'
export { MenuWithRadioItems as RadioItems } from './examples/menu-with-radio-items'
export { MenuWithStore as WithStore } from './examples/menu-with-store'
export { MenuWithSubmenu as Submenu } from './examples/menu-with-submenu'
export { MenuWithSubmenuDynamic as SubmenuDynamic } from './examples/menu-with-submenu-dynamic'
