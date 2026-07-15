import { Badge, Stack, Text } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const BadgeWithColors = () => {
  return (
    <Stack align="flex-start" gap="2">
      {colorPalettes.map((colorPalette) => (
        <Stack align="center" direction="row" gap="10" key={colorPalette} px="4" width="full">
          <Text minW="8ch">{colorPalette}</Text>
          <Badge colorPalette={colorPalette} variant="solid">
            New
          </Badge>
          <Badge colorPalette={colorPalette} variant="outline">
            New
          </Badge>
          <Badge colorPalette={colorPalette} variant="subtle">
            New
          </Badge>
          <Badge colorPalette={colorPalette} variant="surface">
            New
          </Badge>
        </Stack>
      ))}
    </Stack>
  )
}
