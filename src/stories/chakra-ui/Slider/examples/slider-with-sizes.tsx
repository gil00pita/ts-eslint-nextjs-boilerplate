import { For, Slider, Stack } from '@chakra-ui/react'

export const SliderWithSizes = () => {
  return (
    <Stack gap="4" width="200px">
      <For each={['sm', 'md', 'lg']}>
        {(size) => (
          <Slider.Root defaultValue={[40]} key={size} size={size}>
            <Slider.Label>Slider - {size}</Slider.Label>
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
