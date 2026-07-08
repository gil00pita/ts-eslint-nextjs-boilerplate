import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Portal',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Portal')

export { PortalBasic as Basic } from './examples/portal-basic'
export { PortalWithIframe as Iframe } from './examples/portal-with-iframe'
export { PortalWithContainer as Container } from './examples/portal-with-container'
