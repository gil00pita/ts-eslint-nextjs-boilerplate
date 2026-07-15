import { Image } from '@chakra-ui/react'

export const ImageWithAspectRatio = () => {
  return (
    <Image
      alt="Naruto vs Sasuke"
      aspectRatio={4 / 3}
      src="https://wallpapercave.com/uwp/uwp4261619.png"
      width="300px"
    />
  )
}
