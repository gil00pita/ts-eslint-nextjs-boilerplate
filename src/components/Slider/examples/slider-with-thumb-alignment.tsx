import { Slider, Stack } from '@chakra-ui/react'

export const SliderWithThumbAlignment = () => {
  return (
    <Stack gap="4" maxW="200px">
      <Slider.Root
        defaultValue={[40]}
        thumbAlignment="contain"
        thumbSize={{ height: 16, width: 16 }}
      >
        <Slider.Label>Slider (contain)</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>

      <Slider.Root defaultValue={[40]} thumbAlignment="center">
        <Slider.Label>Slider (center)</Slider.Label>
        <Slider.Control>
          <Slider.Track>
            <Slider.Range />
          </Slider.Track>
          <Slider.Thumbs />
        </Slider.Control>
      </Slider.Root>
    </Stack>
  )
}
