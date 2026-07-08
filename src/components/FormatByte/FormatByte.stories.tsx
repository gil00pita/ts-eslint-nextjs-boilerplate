import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import { Box } from '@chakra-ui/react'
import type { Meta } from '@storybook/nextjs-vite'

const meta = {
  title: 'Internationalization / Format Byte',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('FormatByte')

export { FormatByteBasic as Basic } from './examples/format-byte-basic'
export { FormatByteSizes as Sizes } from './examples/format-byte-sizes'
export { FormatByteWithLocale as WithLocale } from './examples/format-byte-with-locale'
export { FormatByteWithUnitDisplay as WithUnitDisplay } from './examples/format-byte-with-unit-display'
export { FormatByteWithUnit as WithUnit } from './examples/format-byte-with-unit'
