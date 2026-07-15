'use client'

import { Box, Slider } from '@chakra-ui/react'
import { MdGraphicEq } from 'react-icons/md'

export const SliderCustomization = () => {
  return (
    <Slider.Root defaultValue={[30]}>
      <Slider.Control>
        <Slider.Track bg="red.100">
          <Slider.Range bg="tomato" />
        </Slider.Track>
        <Slider.Thumb borderColor="tomato" boxSize={6} index={0}>
          <Box as={MdGraphicEq} color="tomato" />
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}
