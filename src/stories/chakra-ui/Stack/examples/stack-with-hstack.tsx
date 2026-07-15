import { HStack } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const StackWithHstack = () => {
  return (
    <HStack>
      <DecorativeBox h="10" />
      <DecorativeBox h="5" />
      <DecorativeBox h="20" />
    </HStack>
  )
}
