import type { Meta } from '@storybook/react-vite'

import { Box } from '@chakra-ui/react'

import { Toaster } from '@/ui/toaster'
import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'

export default {
  decorators: [
    (Story: any) => (
      <Box p="10">
        <Story />
        <Toaster />
      </Box>
    ),
  ],
  title: 'Feedback / Toast',
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
