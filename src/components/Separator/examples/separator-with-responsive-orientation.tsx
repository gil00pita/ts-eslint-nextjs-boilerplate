import { Separator, Stack } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const SeparatorWithResponsiveOrientation = () => {
  return (
    <Stack align="stretch" direction={{ base: 'row', md: 'column' }}>
      <DecorativeBox>First</DecorativeBox>
      <Separator orientation={{ base: 'vertical', sm: 'horizontal' }} />
      <DecorativeBox>Second</DecorativeBox>
    </Stack>
  )
}
