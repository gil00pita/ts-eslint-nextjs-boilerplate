import { Spinner, Stack } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const SpinnerWithColors = () => {
  return (
    <Stack align="flex-start" gap="2">
      {colorPalettes.map((colorPalette) => (
        <Stack align="center" direction="row" gap="10" key={colorPalette} px="4">
          <Spinner color="colorPalette.600" colorPalette={colorPalette} size="sm" />
          <Spinner color="colorPalette.600" colorPalette={colorPalette} size="md" />
          <Spinner color="colorPalette.600" colorPalette={colorPalette} size="lg" />
        </Stack>
      ))}
    </Stack>
  )
}
