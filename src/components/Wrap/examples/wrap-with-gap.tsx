import { Wrap } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const WrapWithGap = () => (
  <Wrap gap="5">
    {Array.from({ length: 10 }).map((_, index) => (
      <DecorativeBox h="12" key={index} w="12" />
    ))}
  </Wrap>
)
