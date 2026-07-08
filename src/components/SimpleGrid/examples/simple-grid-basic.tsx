import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { SimpleGrid } from '@chakra-ui/react'

export const SimpleGridBasic = () => {
  return (
    <SimpleGrid columns={2} gap="40px">
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
    </SimpleGrid>
  )
}
