import type { Meta } from '@storybook/nextjs-vite'

import { Box } from '@chakra-ui/react'

import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'

const meta = {
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
  title: 'Forms / Toggle',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('Toggle')

export { ToggleBasic as Basic } from './examples/toggle-basic'
export { ToggleControlled as Controlled } from './examples/toggle-controlled'
export { ToggleTipBasic as TipBasic } from './examples/toggle-tip-basic'
export { ToggleTipInfoTip as TipInfoTip } from './examples/toggle-tip-info-tip'
export { ToggleWithIndicator as WithIndicator } from './examples/toggle-with-indicator'
export { ToggleWithPressedIcon as WithPressedIcon } from './examples/toggle-with-pressed-icon'
