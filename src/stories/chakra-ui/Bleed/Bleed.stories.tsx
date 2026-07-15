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
  title: 'Layout / Bleed',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('Bleed')

export { BleedBasic as Basic } from './examples/bleed-basic'
export { BleedVertical as Vertical } from './examples/bleed-vertical'
export { BleedWithDirection as WithDirection } from './examples/bleed-with-direction'
