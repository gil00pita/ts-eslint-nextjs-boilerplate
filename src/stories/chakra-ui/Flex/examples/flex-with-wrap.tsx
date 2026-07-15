import { Flex } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const FlexWithWrap = () => {
  return (
    <Flex gap="4" maxW="500px" wrap="wrap">
      <DecorativeBox height="10" width="200px" />
      <DecorativeBox height="10" width="200px" />
      <DecorativeBox height="10" width="200px" />
    </Flex>
  )
}
