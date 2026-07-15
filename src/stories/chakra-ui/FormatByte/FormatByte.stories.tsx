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
  title: 'Internationalization / Format Byte',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('FormatByte')

export { FormatByteBasic as Basic } from './examples/format-byte-basic'
export { FormatByteSizes as Sizes } from './examples/format-byte-sizes'
export { FormatByteWithLocale as WithLocale } from './examples/format-byte-with-locale'
export { FormatByteWithUnit as WithUnit } from './examples/format-byte-with-unit'
export { FormatByteWithUnitDisplay as WithUnitDisplay } from './examples/format-byte-with-unit-display'
