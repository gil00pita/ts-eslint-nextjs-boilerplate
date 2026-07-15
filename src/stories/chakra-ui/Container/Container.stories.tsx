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
  title: 'Layout / Container',
} satisfies Meta

export const Playground = createComponentPlayground('Container')

export { ContainerBasic as Basic } from './examples/container-basic'
export { ContainerWithFluid as Fluid } from './examples/container-with-fluid'
export { ContainerWithSizes as Sizes } from './examples/container-with-sizes'
