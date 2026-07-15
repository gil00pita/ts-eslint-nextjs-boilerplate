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
  title: 'Data Display / Stat',
} satisfies Meta

export const Playground = createComponentPlayground('Stat')

export { StatBasic as Basic } from './examples/stat-basic'
export { StatWithFormatOptions as FormatOptions } from './examples/stat-with-format-options'
export { StatWithGroup as StatGroup } from './examples/stat-with-group'
export { StatWithIcon as Icon } from './examples/stat-with-icon'
export { StatWithIndicator as Indicator } from './examples/stat-with-indicator'
export { StatWithInfoTip as InfoTip } from './examples/stat-with-info-tip'
export { StatWithProgressBar as ProgressBar } from './examples/stat-with-progress-bar'
export { StatWithTrend as Trend } from './examples/stat-with-trend'
export { StatWithValueUnit as ValueUnit } from './examples/stat-with-value-unit'
