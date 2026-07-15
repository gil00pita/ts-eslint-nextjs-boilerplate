import { Flex } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const FlexBasic = () => {
  return (
    <Flex gap="4">
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
    </Flex>
  )
}
