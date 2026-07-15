import { Heading } from '@chakra-ui/react'

export const HeadingWithGradient = () => {
  return (
    <Heading bgClip="text" bgGradient="to-l" gradientFrom="red.500" gradientTo="blue.500">
      The quick brown fox jumps over the lazy dog
    </Heading>
  )
}
