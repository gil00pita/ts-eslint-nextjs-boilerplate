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
  title: 'Buttons / Download Trigger',
} satisfies Meta

export const Playground = createComponentPlayground('DownloadTrigger')

export { DownloadTriggerBasic as Basic } from './examples/download-trigger-basic'
export { DownloadTriggerSvg as Svg } from './examples/download-trigger-svg'
export { DownloadTriggerWithFileSize as FileSize } from './examples/download-trigger-with-file-size'
export { DownloadTriggerWithPromise as Promise } from './examples/download-trigger-with-promise'
