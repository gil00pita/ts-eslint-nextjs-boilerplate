import { Slider } from '@chakra-ui/react'

const marks = [
  { label: '0%', value: 0 },
  { label: '50%', value: 50 },
  { label: '100%', value: 100 },
]

export const SliderWithMarksVertical = () => {
  return (
    <Slider.Root colorPalette="pink" defaultValue={[40]} height="200px" orientation="vertical">
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
        <Slider.Marks marks={marks} />
      </Slider.Control>
    </Slider.Root>
  )
}
