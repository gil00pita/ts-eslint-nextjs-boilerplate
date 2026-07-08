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
  title: 'Data Display / Card',
} satisfies Meta

export const Playground = createComponentPlayground('Card')

export { CardBasic as Basic } from './examples/card-basic'
export { CardHorizontal as Horizontal } from './examples/card-horizontal'
export { CardSizeTable as Sizes } from './examples/card-size-table'
export { CardVariantTable as Variants } from './examples/card-variant-table'
export { CardWithAvatar as Avatar } from './examples/card-with-avatar'
export { CardWithForm as Form } from './examples/card-with-form'
export { CardWithImage as Image } from './examples/card-with-image'
