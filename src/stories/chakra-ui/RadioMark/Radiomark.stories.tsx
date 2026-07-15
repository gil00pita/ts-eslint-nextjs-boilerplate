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
  title: 'Utilities / Radiomark',
} satisfies Meta

export const Playground = createComponentPlayground('RadioMark')

export { RadiomarkBasic as Basic } from './examples/radiomark-basic'
export { RadiomarkVariants as Variants } from './examples/radiomark-variants'
