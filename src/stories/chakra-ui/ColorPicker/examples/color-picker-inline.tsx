'use client'

import { ColorPicker, HStack, parseColor } from '@chakra-ui/react'

export const ColorPickerInline = () => {
  return (
    <ColorPicker.Root defaultValue={parseColor('#000')} open>
      <ColorPicker.HiddenInput />
      <ColorPicker.Content animation="none" padding="0" shadow="none">
        <ColorPicker.Area />
        <HStack>
          <ColorPicker.EyeDropper size="xs" variant="outline" />
          <ColorPicker.Sliders />
          <ColorPicker.ValueSwatch />
        </HStack>
      </ColorPicker.Content>
    </ColorPicker.Root>
  )
}
