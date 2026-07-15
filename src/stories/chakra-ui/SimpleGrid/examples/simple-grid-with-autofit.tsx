import { SimpleGrid } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const SimpleGridWithAutofit = () => (
  <SimpleGrid gap="40px" minChildWidth="sm">
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
    <DecorativeBox height="20" />
  </SimpleGrid>
)
