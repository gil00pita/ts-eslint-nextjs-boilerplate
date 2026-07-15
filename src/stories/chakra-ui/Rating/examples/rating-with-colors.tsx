import { RatingGroup, Stack, Text } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const RatingWithColors = () => {
  return (
    <Stack align="flex-start" gap="2">
      {colorPalettes.map((colorPalette) => (
        <Stack align="center" direction="row" gap="10" key={colorPalette} px="4">
          <Text minW="8ch">{colorPalette}</Text>

          <RatingGroup.Root colorPalette={colorPalette} count={5} defaultValue={3} size="sm">
            <RatingGroup.HiddenInput />
            <RatingGroup.Control />
          </RatingGroup.Root>
        </Stack>
      ))}
    </Stack>
  )
}
