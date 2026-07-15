import { Slider } from '@chakra-ui/react'

export const SliderDisabled = () => {
  return (
    <Slider.Root defaultValue={[40]} disabled width="200px">
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
