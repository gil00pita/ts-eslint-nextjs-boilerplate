import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Forms / Fieldset',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('Fieldset')

export { FieldsetBasic as Basic } from './examples/fieldset-basic'
export { FieldsetWithDisabled as Disabled } from './examples/fieldset-with-disabled'
export { FieldsetWithInvalid as Invalid } from './examples/fieldset-with-invalid'
