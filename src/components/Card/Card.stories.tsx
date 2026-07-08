import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Card',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Card')

export { CardBasic as Basic } from './examples/card-basic'
export { CardVariantTable as Variants } from './examples/card-variant-table'
export { CardSizeTable as Sizes } from './examples/card-size-table'
export { CardWithAvatar as Avatar } from './examples/card-with-avatar'
export { CardWithImage as Image } from './examples/card-with-image'
export { CardHorizontal as Horizontal } from './examples/card-horizontal'
export { CardWithForm as Form } from './examples/card-with-form'
