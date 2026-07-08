import { SimpleGrid } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const SimpleGridWithRowAndColGap = () => {
  return (
    <SimpleGrid columnGap="2" columns={2} rowGap="4">
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
    </SimpleGrid>
  )
}
