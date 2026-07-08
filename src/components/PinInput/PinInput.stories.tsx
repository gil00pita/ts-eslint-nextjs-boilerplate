import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / PinInput',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('PinInput')

export { PinInputAlphanumeric as Alphanumeric } from './examples/pin-input-alphanumeric'
export { PinInputAttached as Attached } from './examples/pin-input-attached'
export { PinInputBasic as Basic } from './examples/pin-input-basic'
export { PinInputControlled as Controlled } from './examples/pin-input-controlled'
export { PinInputWithField as WithField } from './examples/pin-input-with-field'
export { PinInputWithSeparator as WithSeparator } from './examples/pin-input-with-separator'
export { PinInputWithHookForm as WithHookForm } from './examples/pin-input-with-hook-form'
export { PinInputWithMask as WithMask } from './examples/pin-input-with-mask'
export { PinInputWithOtp as WithOtp } from './examples/pin-input-with-otp'
export { PinInputWithPlaceholder as WithPlaceholder } from './examples/pin-input-with-placeholder'
export { PinInputWithSizes as Sizes } from './examples/pin-input-with-sizes'
export { PinInputWithStore as WithStore } from './examples/pin-input-with-store'
