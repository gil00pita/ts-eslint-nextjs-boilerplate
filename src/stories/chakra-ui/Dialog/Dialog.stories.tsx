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
  title: 'Overlays / Dialog',
} satisfies Meta

export const Playground = createComponentPlayground('Dialog')

export { DialogBasic as Basic } from './examples/dialog-basic'
export { DialogControlled as Controlled } from './examples/dialog-controlled'
export { DialogNested as Nested } from './examples/dialog-nested'
export { DialogNonModal as NonModal } from './examples/dialog-non-modal'
export { DialogOpenFromMenu as OpenFromMenu } from './examples/dialog-open-from-menu'
export { DialogOpenFromPopover as OpenFromPopover } from './examples/dialog-open-from-popover'
export { DialogWithBackdropBlur as BackdropBlur } from './examples/dialog-with-backdrop-blur'
export { DialogWithCloseOutside as CloseOutside } from './examples/dialog-with-close-outside'
export { DialogWithContext as Context } from './examples/dialog-with-context'
export { DialogWithCover as Cover } from './examples/dialog-with-cover'
export { DialogWithDatalist as Datalist } from './examples/dialog-with-datalist'
export { DialogWithFinalFocus as FinalFocus } from './examples/dialog-with-final-focus'
export { DialogWithFullscreen as Fullscreen } from './examples/dialog-with-fullscreen'
export { DialogWithInitialFocus as InitialFocus } from './examples/dialog-with-initial-focus'
export { DialogWithInsideScroll as InsideScroll } from './examples/dialog-with-inside-scroll'
export { DialogWithOutsideScroll as OutsideScroll } from './examples/dialog-with-outside-scroll'
export { DialogWithPlacement as Placement } from './examples/dialog-with-placement'
export { DialogWithResponsiveSize as ResponsiveSize } from './examples/dialog-with-responsive-size'
export { DialogWithRole as Role } from './examples/dialog-with-role'
export { DialogWithSizes as Sizes } from './examples/dialog-with-sizes'
export { DialogWithStore as Store } from './examples/dialog-with-store'
