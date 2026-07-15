import { ColorPicker } from '@chakra-ui/react'

export const ColorPickerSwatchOnly = () => {
  return (
    <ColorPicker.Root alignItems="flex-start">
      <ColorPicker.HiddenInput />
      <ColorPicker.Label>
        Color: <ColorPicker.ValueText />
      </ColorPicker.Label>
      <ColorPicker.SwatchGroup>
        {swatches.map((item) => (
          <ColorPicker.SwatchTrigger key={item} value={item}>
            <ColorPicker.Swatch value={item}>
              <ColorPicker.SwatchIndicator bg="white" boxSize="3" />
            </ColorPicker.Swatch>
          </ColorPicker.SwatchTrigger>
        ))}
      </ColorPicker.SwatchGroup>
    </ColorPicker.Root>
  )
}

const swatches = ['red', 'green', 'blue', 'purple', 'orange', 'pink']
