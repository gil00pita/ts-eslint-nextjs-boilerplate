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
  title: 'Forms / Fieldset',
} satisfies Meta

export const Playground = createComponentPlayground('Fieldset')

export { FieldsetBasic as Basic } from './examples/fieldset-basic'
export { FieldsetWithDisabled as Disabled } from './examples/fieldset-with-disabled'
export { FieldsetWithInvalid as Invalid } from './examples/fieldset-with-invalid'
