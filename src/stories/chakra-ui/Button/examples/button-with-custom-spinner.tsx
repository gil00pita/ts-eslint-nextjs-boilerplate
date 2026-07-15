import { Button } from '@chakra-ui/react'
import { BeatLoader } from 'react-spinners'

export const ButtonWithCustomSpinner = () => {
  return (
    <Button colorPalette="blue" loading spinner={<BeatLoader color="white" size={8} />}>
      Click me
    </Button>
  )
}
