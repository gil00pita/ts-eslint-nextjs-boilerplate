import { HStack } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const BoxWithHideBelow = () => (
  <HStack>
    <DecorativeBox bg="green.300" flex="1" height="40px" hideBelow="md" />
    <DecorativeBox flex="1" height="40px" />
  </HStack>
)
