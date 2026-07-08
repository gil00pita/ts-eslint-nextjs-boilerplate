'use client'

import { ColorPicker, HStack, parseColor, Portal, useColorPicker } from '@chakra-ui/react'

export const ColorPickerWithStore = () => {
  const colorPicker = useColorPicker({
    defaultValue: parseColor('#eb5e41'),
  })

  return (
    <ColorPicker.RootProvider maxW="200px" value={colorPicker}>
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
    </ColorPicker.RootProvider>
  )
}
