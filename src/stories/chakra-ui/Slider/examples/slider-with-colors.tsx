import { For, Slider, Stack } from '@chakra-ui/react'

const colors = ['gray', 'blue', 'red', 'green', 'pink']

export const SliderWithColors = () => {
  return (
    <Stack align="flex-start" gap="4">
      <For each={colors}>
        {(color) => (
          <Slider.Root colorPalette={color} defaultValue={[40]} key={color} width="200px">
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumbs />
            </Slider.Control>
          </Slider.Root>
        )}
      </For>
    </Stack>
  )
}
