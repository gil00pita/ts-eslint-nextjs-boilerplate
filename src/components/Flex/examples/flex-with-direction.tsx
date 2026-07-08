import { Flex } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const FlexWithDirection = () => {
  return (
    <Flex direction="column" gap="4">
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
      <DecorativeBox height="10" />
    </Flex>
  )
}
