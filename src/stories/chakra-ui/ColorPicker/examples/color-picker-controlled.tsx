'use client'

import { ColorPicker, HStack, parseColor, Portal } from '@chakra-ui/react'
import { useState } from 'react'

export const ColorPickerControlled = () => {
  const [color, setColor] = useState(parseColor('#eb5e41'))

  return (
    <ColorPicker.Root
      format="hsla"
      maxW="200px"
      onValueChange={(e) => setColor(e.value)}
      value={color}
    >
      <ColorPicker.HiddenInput />
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.Input />
        <ColorPicker.Trigger />
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper size="xs" variant="outline" />
              <ColorPicker.Sliders />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  )
}
