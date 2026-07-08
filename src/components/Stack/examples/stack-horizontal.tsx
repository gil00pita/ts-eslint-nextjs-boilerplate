import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { Stack } from '@chakra-ui/react'

export const StackHorizontal = () => {
  return (
    <Stack direction="row" h="20">
      <DecorativeBox />
      <DecorativeBox />
      <DecorativeBox />
    </Stack>
  )
}
