import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { Flex } from '@chakra-ui/react'

export const FlexWithAlign = () => {
  return (
    <Flex gap="4" align="center">
      <DecorativeBox height="4" />
      <DecorativeBox height="8" />
      <DecorativeBox height="10" />
    </Flex>
  )
}
