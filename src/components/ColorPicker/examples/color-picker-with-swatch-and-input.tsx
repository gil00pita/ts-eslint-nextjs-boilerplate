'use client'

import { ColorPicker, parseColor, Portal } from '@chakra-ui/react'
import { LuCheck } from 'react-icons/lu'

export const ColorPickerWithSwatchAndInput = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor('#eb5e41')} maxW="200px" size="xs">
      <ColorPicker.HiddenInput />
      <ColorPicker.Control>
        <ColorPicker.Trigger />
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <ColorPicker.SwatchGroup>
              {swatches.map((item) => (
                <ColorPicker.SwatchTrigger key={item} value={item}>
                  <ColorPicker.Swatch value={item}>
                    <ColorPicker.SwatchIndicator>
                      <LuCheck />
                    </ColorPicker.SwatchIndicator>
                  </ColorPicker.Swatch>
                </ColorPicker.SwatchTrigger>
              ))}
            </ColorPicker.SwatchGroup>
            <ColorPicker.ChannelInput channel="hex" />
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  )
}

const swatches = ['red', 'blue', 'green']
