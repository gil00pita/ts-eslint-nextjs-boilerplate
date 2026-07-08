import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Toaster } from '@/ui/toaster'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Feedback / Toast',
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
        <Toaster />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Toast')

export { ToasterBasic as Basic } from './examples/toaster-basic'
export { ToasterClosable as Closable } from './examples/toaster-closable'
export { ToasterLifecycle as Lifecycle } from './examples/toaster-lifecycle'
export { ToasterPersistent as Persistent } from './examples/toaster-persistent'
export { ToasterStatic as Static } from './examples/toaster-static'
export { ToasterWithAction as Action } from './examples/toaster-with-action'
export { ToasterWithDuration as Duration } from './examples/toaster-with-duration'
export { ToasterWithExternalClose as ExternalClose } from './examples/toaster-with-external-close'
export { ToasterWithPromise as Promise } from './examples/toaster-with-promise'
export { ToasterWithStatus as Status } from './examples/toaster-with-status'
export { ToasterWithUpdate as Update } from './examples/toaster-with-update'
