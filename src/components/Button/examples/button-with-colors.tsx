import { Button, Stack, Text } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const ButtonWithColors = () => {
  return (
    <Stack align="flex-start" gap="2">
      {colorPalettes.map((colorPalette) => (
        <Stack align="center" direction="row" gap="10" key={colorPalette}>
          <Text minW="8ch">{colorPalette}</Text>
          <Button colorPalette={colorPalette}>Button</Button>
          <Button colorPalette={colorPalette} variant="outline">
            Button
          </Button>
          <Button colorPalette={colorPalette} variant="surface">
            Button
          </Button>
          <Button colorPalette={colorPalette} variant="subtle">
            Button
          </Button>
        </Stack>
      ))}
    </Stack>
  )
}
