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
  title: 'Overlays / Action Bar',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('ActionBar')

export { ActionBarBasic as Basic } from './examples/action-bar-basic'
export { ActionBarPlacement as Placement } from './examples/action-bar-placement'
export { ActionBarWithCloseTrigger as WithCloseTrigger } from './examples/action-bar-with-close-trigger'
export { ActionBarWithDialog as WithDialog } from './examples/action-bar-with-dialog'
