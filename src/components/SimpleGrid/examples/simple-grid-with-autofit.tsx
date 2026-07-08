import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { SimpleGrid } from '@chakra-ui/react'

export const SimpleGridWithAutofit = () => (
  <SimpleGrid minChildWidth="sm" gap="40px">
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
  </SimpleGrid>
)
