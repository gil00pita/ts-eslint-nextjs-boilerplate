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
  title: 'Internationalization / Format Number',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('FormatNumber')

export { FormatNumberBasic as Basic } from './examples/format-number-basic'
export { FormatNumberWithCompact as WithCompact } from './examples/format-number-with-compact'
export { FormatNumberWithCurrency as WithCurrency } from './examples/format-number-with-currency'
export { FormatNumberWithLocale as WithLocale } from './examples/format-number-with-locale'
export { FormatNumberWithPercentage as WithPercentage } from './examples/format-number-with-percentage'
export { FormatNumberWithUnit as WithUnit } from './examples/format-number-with-unit'
