import { Center, Wrap, WrapItem } from '@chakra-ui/react'

export const WrapWithJustify = () => (
  <Wrap gap="30px" justify="center">
    {Array.from({ length: 5 }).map((_, index) => (
      <WrapItem key={index}>
        <Center bg="red.muted" h="80px" w="180px">
          Box {index + 1}
        </Center>
      </WrapItem>
    ))}
  </Wrap>
)
