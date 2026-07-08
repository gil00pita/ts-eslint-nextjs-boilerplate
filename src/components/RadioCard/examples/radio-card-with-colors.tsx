import { For, HStack, RadioCard, Stack } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const RadioCardWithColors = () => {
  return (
    <Stack gap="8">
      <For each={colorPalettes}>
        {(colorPalette) => (
          <RadioCard.Root colorPalette={colorPalette} defaultValue="next" key={colorPalette}>
            <RadioCard.Label>Select Framework</RadioCard.Label>
            <HStack align="stretch">
              {items.map((item) => (
                <RadioCard.Item key={item.value} value={item.value}>
                  <RadioCard.ItemHiddenInput />
                  <RadioCard.ItemControl>
                    <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                    <RadioCard.ItemIndicator />
                  </RadioCard.ItemControl>
                </RadioCard.Item>
              ))}
            </HStack>
          </RadioCard.Root>
        )}
      </For>
    </Stack>
  )
}

const items = [
  { title: 'Next.js', value: 'next' },
  { title: 'Vite', value: 'vite' },
]
