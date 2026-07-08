import { Slider } from '@chakra-ui/react'

export const SliderBasic = () => {
  return (
    <Slider.Root defaultValue={[40]} width="200px">
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
