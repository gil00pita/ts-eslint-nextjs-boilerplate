import { Flex } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const FlexWithAutoMargin = () => {
  return (
    <Flex gap="4" justify="space-between">
      <DecorativeBox height="10" width="40" />
      <DecorativeBox height="10" marginEnd="auto" width="40" />
      <DecorativeBox height="10" width="40" />
    </Flex>
  )
}
