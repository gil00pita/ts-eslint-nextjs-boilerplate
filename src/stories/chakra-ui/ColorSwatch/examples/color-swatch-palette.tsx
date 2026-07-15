import { ColorSwatch, Group } from '@chakra-ui/react'

export const ColorSwatchPalette = () => {
  return (
    <Group attached grow maxW="sm" width="full">
      {swatches.map((color) => (
        <ColorSwatch key={color} size="2xl" value={color} />
      ))}
    </Group>
  )
}

const swatches = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
