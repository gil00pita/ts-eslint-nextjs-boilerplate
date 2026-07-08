import { VStack } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const StackWithVstack = () => {
  return (
    <VStack>
      <DecorativeBox h="20" w="50%" />
      <DecorativeBox h="20" w="25%" />
      <DecorativeBox h="20" w="100%" />
    </VStack>
  )
}
