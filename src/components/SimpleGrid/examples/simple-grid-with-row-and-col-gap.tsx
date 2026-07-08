import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { SimpleGrid } from '@chakra-ui/react'

export const SimpleGridWithRowAndColGap = () => {
  return (
    <SimpleGrid columns={2} columnGap="2" rowGap="4">
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
    </SimpleGrid>
  )
}
