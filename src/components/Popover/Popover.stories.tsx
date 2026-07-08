import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Popover',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Popover')

export { PopoverBasic as Basic } from './examples/popover-basic'
export { PopoverControlled as Controlled } from './examples/popover-controlled'
export { PopoverOpenFromDialog as OpenFromDialog } from './examples/popover-open-from-dialog'
export { PopoverLazyMounted as LazyMounted } from './examples/popover-lazy-mounted'
export { PopoverNested as Nested } from './examples/popover-nested'
export { PopoverSizeTable as Sizes } from './examples/popover-size-table'
export { PopoverWithCustomBg as CustomBg } from './examples/popover-with-custom-bg'
export { PopoverWithForm as Form } from './examples/popover-with-form'
export { PopoverWithInitialFocus as InitialFocus } from './examples/popover-with-initial-focus'
export { PopoverWithOffset as Offset } from './examples/popover-with-offset'
export { PopoverWithPlacement as Placement } from './examples/popover-with-placement'
export { PopoverWithSameWidth as SameWidth } from './examples/popover-with-same-width'
