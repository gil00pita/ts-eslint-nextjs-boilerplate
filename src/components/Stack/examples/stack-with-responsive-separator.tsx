import { Stack, StackSeparator } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const StackWithResponsiveSeparator = () => (
  <Stack
    direction={['column', 'row']}
    gap={4}
    mt={10}
    separator={<StackSeparator borderColor={{ base: 'green.500', md: 'red.200' }} />}
  >
    <DecorativeBox flex="1" h="40px" w={['100%', '40px']}>
      1
    </DecorativeBox>
    <DecorativeBox flex="1" h="40px" w={['100%', '40px']}>
      2
    </DecorativeBox>
    <DecorativeBox flex="1" h="40px" w={['100%', '40px']}>
      3
    </DecorativeBox>
  </Stack>
)
