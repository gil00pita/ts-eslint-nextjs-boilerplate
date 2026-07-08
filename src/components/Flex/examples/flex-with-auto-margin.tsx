import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { Flex } from '@chakra-ui/react'

export const FlexWithAutoMargin = () => {
  return (
    <Flex gap="4" justify="space-between">
      <DecorativeBox height="10" width="40" />
      <DecorativeBox height="10" width="40" marginEnd="auto" />
      <DecorativeBox height="10" width="40" />
    </Flex>
  )
}
