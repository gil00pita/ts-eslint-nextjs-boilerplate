import { Slider } from '@chakra-ui/react'

export const SliderVertical = () => {
  return (
    <Slider.Root defaultValue={[40]} height="200px" orientation="vertical">
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
