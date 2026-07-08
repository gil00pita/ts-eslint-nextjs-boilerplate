import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { VStack } from '@chakra-ui/react'

export const StackWithVstack = () => {
  return (
    <VStack>
      <DecorativeBox w="50%" h="20" />
      <DecorativeBox w="25%" h="20" />
      <DecorativeBox w="100%" h="20" />
    </VStack>
  )
}
