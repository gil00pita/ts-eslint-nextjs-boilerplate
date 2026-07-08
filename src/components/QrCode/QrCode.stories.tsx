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
  title: 'Data Display / QrCode',
} satisfies Meta

export const Playground = createComponentPlayground('QrCode')

export { QrCodeBasic as Basic } from './examples/qr-code-basic'
export { QrCodeWithErrorLevel as WithErrorLevel } from './examples/qr-code-with-error-level'
export { QrCodeWithExport as WithExport } from './examples/qr-code-with-export'
export { QrCodeWithExportWithLogo as WithExportLogo } from './examples/qr-code-with-export-with-logo'
export { QrCodeWithFill as WithFill } from './examples/qr-code-with-fill'
export { QrCodeWithInput as WithInput } from './examples/qr-code-with-input'
export { QrCodeWithOverlay as WithOverlay } from './examples/qr-code-with-overlay'
export { QrCodeWithSizes as WithSizes } from './examples/qr-code-with-sizes'
export { QrCodeWithSpinner as WithSpinner } from './examples/qr-code-with-spinner'
export { QrCodeWithStore as WithStore } from './examples/qr-code-with-store'
