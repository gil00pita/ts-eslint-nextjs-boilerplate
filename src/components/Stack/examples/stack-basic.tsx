import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { Stack } from '@chakra-ui/react'

export const StackBasic = () => {
  return (
    <Stack>
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
      <DecorativeBox h="20" />
    </Stack>
  )
}
