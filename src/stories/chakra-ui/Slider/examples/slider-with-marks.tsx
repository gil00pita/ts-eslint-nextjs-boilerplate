import { For, Slider, Stack, Text, VStack } from '@chakra-ui/react'

export const SliderWithMarks = () => {
  return (
    <Stack gap="4">
      <For each={['sm', 'md', 'lg']}>
        {(size) => (
          <VStack align="flex-start" key={size}>
            <Slider.Root defaultValue={[40]} key={size} size={size} width="200px">
              <Slider.Control>
                <Slider.Track>
                  <Slider.Range />
                </Slider.Track>
                <Slider.Thumbs />
                <Slider.Marks marks={[0, 50, 100]} />
              </Slider.Control>
            </Slider.Root>
            <Text>size = {size}</Text>
          </VStack>
        )}
      </For>
    </Stack>
  )
}
