import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { HStack } from '@chakra-ui/react'

export const BoxWithHideFrom = () => (
  <HStack>
    <DecorativeBox bg="green.300" hideFrom="md" height="40px" flex="1" />
    <DecorativeBox height="40px" flex="1" />
  </HStack>
)
