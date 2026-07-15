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
  title: 'Layout / Flex',
} satisfies Meta

export const Playground = createComponentPlayground('Flex')

export { FlexBasic as Basic } from './examples/flex-basic'
export { FlexWithAlign as Align } from './examples/flex-with-align'
export { FlexWithAutoMargin as AutoMargin } from './examples/flex-with-auto-margin'
export { FlexWithDirection as Direction } from './examples/flex-with-direction'
export { FlexWithJustify as Justify } from './examples/flex-with-justify'
export { FlexWithOrder as Order } from './examples/flex-with-order'
export { FlexWithSpacer as Spacer } from './examples/flex-with-spacer'
export { FlexWithWrap as Wrap } from './examples/flex-with-wrap'
