import { Slider } from '@chakra-ui/react'

export const SliderPreventOverlap = () => {
  return (
    <Slider.Root defaultValue={[20, 60]} maxW="md" minStepsBetweenThumbs={8}>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.Root>
  )
}
