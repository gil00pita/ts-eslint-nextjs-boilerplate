import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { HStack } from '@chakra-ui/react'

export const BoxWithHideBelow = () => (
  <HStack>
    <DecorativeBox bg="green.300" hideBelow="md" height="40px" flex="1" />
    <DecorativeBox height="40px" flex="1" />
  </HStack>
)
