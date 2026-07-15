'use client'

import {
  Button,
  ColorPicker,
  HStack,
  IconButton,
  parseColor,
  Portal,
  Show,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { LuCheck, LuPlus, LuType } from 'react-icons/lu'

export const ColorPickerWithSaveSwatch = () => {
  const [color, setColor] = useState(parseColor('#000'))
  const [view, setView] = useState<'picker' | 'swatch'>('swatch')
  const [swatches, setSwatches] = useState<string[]>(['#FF0000', '#00FF00', '#0000FF', '#FFFF00'])

  return (
    <ColorPicker.Root defaultValue={color} maxW="200px" onValueChange={(e) => setColor(e.value)}>
      <ColorPicker.HiddenInput />
      <ColorPicker.Control>
        <ColorPicker.Trigger data-fit-content>
          <VStack gap="1">
            <LuType />
            <ColorPicker.ValueSwatch h="2" />
          </VStack>
        </ColorPicker.Trigger>
      </ColorPicker.Control>

      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content>
            <Show when={view === 'picker'}>
              <ColorPicker.Area />
              <HStack>
                <ColorPicker.EyeDropper size="sm" variant="outline" />
                <ColorPicker.Sliders />
              </HStack>
              <Button
                onClick={() => {
                  setSwatches((prev) => [...prev, color.toString('css')])
                  setView('swatch')
                }}
              >
                Save Swatch
              </Button>
            </Show>
            <Show when={view === 'swatch'}>
              <ColorPicker.SwatchGroup>
                {swatches.map((swatch) => (
                  <ColorPicker.SwatchTrigger key={swatch} value={swatch}>
                    <ColorPicker.Swatch value={swatch}>
                      <ColorPicker.SwatchIndicator>
                        <LuCheck />
                      </ColorPicker.SwatchIndicator>
                    </ColorPicker.Swatch>
                  </ColorPicker.SwatchTrigger>
                ))}
                <IconButton onClick={() => setView('picker')} size="xs" variant="outline">
                  <LuPlus />
                </IconButton>
              </ColorPicker.SwatchGroup>
            </Show>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  )
}
