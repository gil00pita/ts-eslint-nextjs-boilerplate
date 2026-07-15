import { Slider } from '@chakra-ui/react'

export const SliderWithMultipleThumbs = () => {
  return (
    <Slider.Root defaultValue={[30, 60]} width="200px">
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
