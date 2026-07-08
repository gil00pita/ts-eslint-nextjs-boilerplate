import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Layout / Container',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Container')

export { ContainerBasic as Basic } from './examples/container-basic'
export { ContainerWithSizes as Sizes } from './examples/container-with-sizes'
export { ContainerWithFluid as Fluid } from './examples/container-with-fluid'
