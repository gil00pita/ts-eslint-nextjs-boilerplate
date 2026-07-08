import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Download Trigger',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('DownloadTrigger')

export { DownloadTriggerBasic as Basic } from './examples/download-trigger-basic'
export { DownloadTriggerWithFileSize as FileSize } from './examples/download-trigger-with-file-size'
export { DownloadTriggerSvg as Svg } from './examples/download-trigger-svg'
export { DownloadTriggerWithPromise as Promise } from './examples/download-trigger-with-promise'
