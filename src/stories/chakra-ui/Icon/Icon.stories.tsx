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
  title: 'Data Display / Icon',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('Icon')

export { IconBasic as Basic } from './examples/icon-basic'
export { IconWithAsProp as WithAsProp } from './examples/icon-with-as-prop'
export { IconWithCreateIcon as WithCreateIcon } from './examples/icon-with-create-icon'
export { IconWithCustomSvg as WithCustomSvg } from './examples/icon-with-custom-svg'
export { IconWithReactIcon as WithReactIcon } from './examples/icon-with-react-icon'
export { IconWithSizes as WithSizes } from './examples/icon-with-sizes'
