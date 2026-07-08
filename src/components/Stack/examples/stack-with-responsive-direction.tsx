import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { Stack } from '@chakra-ui/react'

export const StackWithResponsiveDirection = () => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} gap="10">
      <DecorativeBox boxSize="20" />
      <DecorativeBox boxSize="20" />
      <DecorativeBox boxSize="20" />
    </Stack>
  )
}
