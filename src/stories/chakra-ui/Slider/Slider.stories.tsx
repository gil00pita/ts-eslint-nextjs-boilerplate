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
  title: 'Forms / Slider',
} satisfies Meta

export const Playground = createComponentPlayground('Slider')

export { SliderBasic as Basic } from './examples/slider-basic'
export { SliderChangeEnd as ChangeEnd } from './examples/slider-change-end'
export { SliderControlled as Controlled } from './examples/slider-controlled'
export { SliderCustomization as Customization } from './examples/slider-customization'
export { SliderDisabled as Disabled } from './examples/slider-disabled'
export { SliderPreventOverlap as PreventOverlap } from './examples/slider-prevent-overlap'
export { SliderSizeTable as Sizes } from './examples/slider-size-table'
export { SliderVariantTable as Variants } from './examples/slider-variant-table'
export { SliderVertical as Vertical } from './examples/slider-vertical'
export { SliderWithCollisionBehavior as CollisionBehavior } from './examples/slider-with-collision-behavior'
export { SliderWithColors as Colors } from './examples/slider-with-colors'
export { SliderWithDraggingIndicator as DraggingIndicator } from './examples/slider-with-dragging-indicator'
export { SliderWithHookForm as HookForm } from './examples/slider-with-hook-form'
export { SliderWithLabel as Label } from './examples/slider-with-label'
export { SliderWithMarks as Marks } from './examples/slider-with-marks'
export { SliderWithMarksAndLabel as MarksAndLabel } from './examples/slider-with-marks-and-label'
export { SliderWithMarksVertical as MarksVertical } from './examples/slider-with-marks-vertical'
export { SliderWithMultipleThumbs as RangeSlider } from './examples/slider-with-multiple-thumbs'
export { SliderWithStep as Step } from './examples/slider-with-step'
export { SliderWithStore as Store } from './examples/slider-with-store'
export { SliderWithThumbAlignment as ThumbAlignment } from './examples/slider-with-thumb-alignment'
export { SliderWithValueText as ValueText } from './examples/slider-with-value-text'
