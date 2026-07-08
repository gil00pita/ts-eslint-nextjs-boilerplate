'use client'

import { Slider as ChakraSlider } from '@chakra-ui/react'
import * as React from 'react'

export type SliderProps = React.ComponentProps<typeof ChakraSlider.Root>

export function Slider(props: SliderProps) {
  return (
    <ChakraSlider.Root {...props}>
      <ChakraSlider.Control>
        <ChakraSlider.Track>
          <ChakraSlider.Range />
        </ChakraSlider.Track>
        <ChakraSlider.Thumb index={0} />
      </ChakraSlider.Control>
    </ChakraSlider.Root>
  )
}
