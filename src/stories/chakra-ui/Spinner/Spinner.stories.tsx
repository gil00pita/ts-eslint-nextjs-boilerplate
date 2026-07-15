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
  title: 'Feedback / Spinner',
} satisfies Meta

export const Playground = createComponentPlayground('Spinner')

export { SpinnerBasic as Basic } from './examples/spinner-basic'
export { SpinnerCustomColor as CustomColor } from './examples/spinner-custom-color'
export { SpinnerSizeTable as Sizes } from './examples/spinner-size-table'
export { SpinnerWithCustomSpeed as CustomSpeed } from './examples/spinner-with-custom-speed'
export { SpinnerWithCustomThickness as CustomThickness } from './examples/spinner-with-custom-thickness'
export { SpinnerWithLabel as Label } from './examples/spinner-with-label'
export { SpinnerWithOverlay as Overlay } from './examples/spinner-with-overlay'
export { SpinnerWithTrackColor as TrackColor } from './examples/spinner-with-track-color'
