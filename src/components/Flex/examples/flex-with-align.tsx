import { Flex } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const FlexWithAlign = () => {
  return (
    <Flex align="center" gap="4">
      <DecorativeBox height="4" />
      <DecorativeBox height="8" />
      <DecorativeBox height="10" />
    </Flex>
  )
}
