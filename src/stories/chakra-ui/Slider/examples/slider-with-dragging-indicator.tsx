import { Slider } from '@chakra-ui/react'

export const SliderWithDraggingIndicator = () => {
  return (
    <Slider.Root defaultValue={[40]} maxW="200px">
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumb index={0}>
          <Slider.DraggingIndicator layerStyle="fill.solid" px="1.5" rounded="sm" top="6">
            <Slider.ValueText />
          </Slider.DraggingIndicator>
        </Slider.Thumb>
      </Slider.Control>
    </Slider.Root>
  )
}
