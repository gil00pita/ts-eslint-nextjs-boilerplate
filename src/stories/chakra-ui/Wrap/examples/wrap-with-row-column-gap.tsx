import { Wrap } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const WrapWithRowColumnGap = () => (
  <Wrap columnGap={['4px', '12px']} rowGap={['0px', '24px']}>
    {Array.from({ length: 10 }).map((_, index) => (
      <DecorativeBox h="12" key={index} w="12" />
    ))}
  </Wrap>
)
