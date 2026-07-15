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
  title: 'Forms / Segment Group',
} satisfies Meta

export const Playground = createComponentPlayground('SegmentedControl')

export { SegmentedControlBasic as Basic } from './examples/segmented-control-basic'
export { SegmentedControlControlled as Controlled } from './examples/segmented-control-controlled'
export { SegmentedControlInCard as Card } from './examples/segmented-control-in-card'
export { SegmentedControlVertical as Vertical } from './examples/segmented-control-vertical'
export { SegmentedControlWithColorPalette as ColorPalette } from './examples/segmented-control-with-color-palette'
export { SegmentedControlWithCustomIndicator as CustomIndicator } from './examples/segmented-control-with-custom-indicator'
export { SegmentedControlWithDisabled as Disabled } from './examples/segmented-control-with-disabled'
export { SegmentedControlWithDisabledItem as DisabledItem } from './examples/segmented-control-with-disabled-item'
export { SegmentedControlWithHookForm as HookForm } from './examples/segmented-control-with-hook-form'
export { SegmentedControlWithIcon as Icon } from './examples/segmented-control-with-icon'
export { SegmentedControlWithSizes as Sizes } from './examples/segmented-control-with-sizes'
