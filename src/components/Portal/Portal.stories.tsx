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
  title: 'Utilities / Portal',
} satisfies Meta

export const Playground = createComponentPlayground('Portal')

export { PortalBasic as Basic } from './examples/portal-basic'
export { PortalWithContainer as Container } from './examples/portal-with-container'
export { PortalWithIframe as Iframe } from './examples/portal-with-iframe'
