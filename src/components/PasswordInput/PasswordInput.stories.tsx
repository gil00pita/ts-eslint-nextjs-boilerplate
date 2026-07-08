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
  title: 'Forms / Password Input',
} satisfies Meta

export const Playground = createComponentPlayground('PasswordInput')

export { PasswordInputBasic as Basic } from './examples/password-input-basic'
export { PasswordInputControlled as Controlled } from './examples/password-input-controlled'
export { PasswordInputControlledVisibility as ControlledVisibility } from './examples/password-input-controlled-visibility'
export { PasswordInputWithHookForm as HookForm } from './examples/password-input-with-hook-form'
export { PasswordInputWithSizes as Sizes } from './examples/password-input-with-sizes'
export { PasswordInputWithStrengthIndicator as StrengthIndicator } from './examples/password-input-with-strength-indicator'
