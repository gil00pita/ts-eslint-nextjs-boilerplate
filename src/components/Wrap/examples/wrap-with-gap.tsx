import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { Wrap } from '@chakra-ui/react'

export const WrapWithGap = () => (
  <Wrap gap="5">
    {Array.from({ length: 10 }).map((_, index) => (
      <DecorativeBox key={index} h="12" w="12" />
    ))}
  </Wrap>
)
