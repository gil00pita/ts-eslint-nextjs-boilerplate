import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { Flex } from '@chakra-ui/react'

export const FlexBasic = () => {
  return (
    <Flex gap="4">
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
    </Flex>
  )
}
