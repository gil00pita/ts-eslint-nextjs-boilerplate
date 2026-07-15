import { For, HStack, Radiomark } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const RadiomarkWithColors = () => {
  return (
    <HStack gap={4}>
      <For each={colorPalettes}>
        {(colorPalette) => <Radiomark checked colorPalette={colorPalette} key={colorPalette} />}
      </For>
    </HStack>
  )
}
