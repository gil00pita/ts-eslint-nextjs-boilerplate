import { HStack, Slider } from '@chakra-ui/react'

export const SliderWithValueText = () => {
  return (
    <Slider.Root defaultValue={[40]} maxW="sm" size="sm">
      <HStack justify="space-between">
        <Slider.Label>Volume</Slider.Label>
        <Slider.ValueText />
      </HStack>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs rounded="l1" />
      </Slider.Control>
    </Slider.Root>
  )
}
