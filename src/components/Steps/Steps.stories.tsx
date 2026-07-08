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
  title: 'Disclosure / Steps',
} satisfies Meta

export const Playground = createComponentPlayground('Steps')

export { StepsBasic as Basic } from './examples/steps-basic'
export { StepsControlled as Controlled } from './examples/steps-controlled'
export { StepsSizeTable as Sizes } from './examples/steps-size-table'
export { StepsVariantTable as Variants } from './examples/steps-variant-table'
export { StepsVertical as Vertical } from './examples/steps-vertical'
export { StepsWithDescription as Description } from './examples/steps-with-description'
export { StepsWithIcon as Icon } from './examples/steps-with-icon'
export { StepsWithLines as Lines } from './examples/steps-with-lines'
export { StepsWithNumberOnly as NumberOnly } from './examples/steps-with-number-only'
export { StepsWithStore as Store } from './examples/steps-with-store'
export { StepsWithTrigger as Trigger } from './examples/steps-with-trigger'
export { StepsWithValidation as Validation } from './examples/steps-with-validation'
