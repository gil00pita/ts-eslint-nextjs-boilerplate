import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Toggle Tip',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('ToggleTip')

export { ToggleTipBasic as Basic } from './examples/toggle-tip-basic'
export { ToggleTipInfoTip as InfoTip } from './examples/toggle-tip-info-tip'
