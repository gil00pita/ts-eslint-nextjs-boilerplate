import { For, Slider, Stack } from '@chakra-ui/react'

export const SliderWithVariants = () => {
  return (
    <Stack gap="4" width="200px">
      <For each={['outline', 'solid']}>
        {(variant) => (
          <Slider.Root defaultValue={[40]} key={variant} variant={variant}>
            <Slider.Label>Slider - {variant}</Slider.Label>
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
