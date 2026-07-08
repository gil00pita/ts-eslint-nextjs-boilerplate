import { DecorativeBox } from '@/utils/storybook/decorative-box'
import { Wrap } from '@chakra-ui/react'

export const WrapWithRowColumnGap = () => (
  <Wrap rowGap={['0px', '24px']} columnGap={['4px', '12px']}>
    {Array.from({ length: 10 }).map((_, index) => (
      <DecorativeBox key={index} w="12" h="12" />
    ))}
  </Wrap>
)
