import { ColorSwatchMix, HStack } from '@chakra-ui/react'

export const ColorSwatchMixed = () => {
  return (
    <HStack>
      <ColorSwatchMix items={['red', 'pink']} size="lg" />
      <ColorSwatchMix items={['red', 'pink', 'green']} size="lg" />
      <ColorSwatchMix items={['lightgreen', 'green', 'darkgreen', 'black']} size="lg" />
    </HStack>
  )
}
