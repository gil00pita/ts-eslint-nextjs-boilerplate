import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import { Box } from '@chakra-ui/react'
import type { Meta } from '@storybook/nextjs-vite'

const meta = {
  title: 'Components / Format',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('Format')

export { FormatByteBasic as ByteBasic } from './examples/format-byte-basic'
export { FormatByteSizes as ByteSizes } from './examples/format-byte-sizes'
export { FormatByteWithLocale as ByteWithLocale } from './examples/format-byte-with-locale'
export { FormatByteWithUnitDisplay as ByteWithUnitDisplay } from './examples/format-byte-with-unit-display'
export { FormatByteWithUnit as ByteWithUnit } from './examples/format-byte-with-unit'
export { FormatNumberBasic as NumberBasic } from './examples/format-number-basic'
export { FormatNumberWithCompact as NumberWithCompact } from './examples/format-number-with-compact'
export { FormatNumberWithCurrency as NumberWithCurrency } from './examples/format-number-with-currency'
export { FormatNumberWithLocale as NumberWithLocale } from './examples/format-number-with-locale'
export { FormatNumberWithPercentage as NumberWithPercentage } from './examples/format-number-with-percentage'
export { FormatNumberWithUnit as NumberWithUnit } from './examples/format-number-with-unit'
