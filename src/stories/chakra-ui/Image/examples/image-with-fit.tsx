import { Image } from '@chakra-ui/react'

export const ImageWithFit = () => (
  <Image
    border="1px solid red"
    fit="contain"
    h="200px"
    rounded="md"
    src="https://i.pravatar.cc/300?img=2"
    w="300px"
  />
)
