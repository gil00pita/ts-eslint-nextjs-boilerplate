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
  title: 'Disclosure / Collapsible',
} satisfies Meta

export const Playground = createComponentPlayground('Collapsible')

export { CollapsibleBasic as Basic } from './examples/collapsible-basic'
export { CollapsibleControlled as Controlled } from './examples/collapsible-controlled'
export { CollapsibleInitialOpen as InitialOpen } from './examples/collapsible-initial-open'
export { CollapsibleLazyMounted as LazyMounted } from './examples/collapsible-lazy-mounted'
export { CollapsiblePartialHeight as PartialHeight } from './examples/collapsible-partial-height'
export { CollapsibleWithDisabled as Disabled } from './examples/collapsible-with-disabled'
export { CollapsibleWithStore as Store } from './examples/collapsible-with-store'
