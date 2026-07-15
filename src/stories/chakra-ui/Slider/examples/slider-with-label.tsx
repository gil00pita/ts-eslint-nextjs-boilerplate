import { Slider } from '@chakra-ui/react'

export const SliderWithLabel = () => {
  return (
    <Slider.Root defaultValue={[40]} width="200px">
      <Slider.Label>Quantity</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
