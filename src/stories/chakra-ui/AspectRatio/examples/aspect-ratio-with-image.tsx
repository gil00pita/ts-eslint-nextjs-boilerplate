import { AspectRatio, Image } from '@chakra-ui/react'

export const AspectRatioWithImage = () => {
  return (
    <AspectRatio maxW="400px" ratio={4 / 3}>
      <Image alt="naruto" objectFit="cover" src="https://bit.ly/naruto-sage" />
    </AspectRatio>
  )
}
