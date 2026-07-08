import { HStack } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const BoxWithHideFrom = () => (
  <HStack>
    <DecorativeBox bg="green.300" flex="1" height="40px" hideFrom="md" />
    <DecorativeBox flex="1" height="40px" />
  </HStack>
)
