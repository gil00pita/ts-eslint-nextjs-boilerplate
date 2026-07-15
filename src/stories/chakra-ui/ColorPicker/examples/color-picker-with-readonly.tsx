'use client'

import { ColorPicker, HStack, parseColor, Portal } from '@chakra-ui/react'

export const ColorPickerWithReadonly = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor('#eb5e41')} maxW="200px" readOnly>
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
              <ColorPicker.EyeDropper size="sm" variant="outline" />
              <ColorPicker.Sliders />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  )
}
