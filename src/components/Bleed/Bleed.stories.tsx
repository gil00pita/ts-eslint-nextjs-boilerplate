import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import { Box } from '@chakra-ui/react'
import type { Meta } from '@storybook/nextjs-vite'

const meta = {
  title: 'Layout / Bleed',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('Bleed')

export { BleedBasic as Basic } from './examples/bleed-basic'
export { BleedVertical as Vertical } from './examples/bleed-vertical'
export { BleedWithDirection as WithDirection } from './examples/bleed-with-direction'
