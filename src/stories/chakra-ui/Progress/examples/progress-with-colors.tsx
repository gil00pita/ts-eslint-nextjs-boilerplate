import { Progress, Stack, Text } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const ProgressWithColors = () => {
  return (
    <Stack align="flex-start" gap="2">
      {colorPalettes.map((colorPalette) => (
        <Stack align="center" direction="row" gap="10" key={colorPalette} px="4">
          <Text minW="8ch">{colorPalette}</Text>

          <Progress.Root
            colorPalette={colorPalette}
            defaultValue={40}
            variant="outline"
            width="120px"
          >
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
          <Progress.Root
            colorPalette={colorPalette}
            defaultValue={40}
            variant="subtle"
            width="120px"
          >
            <Progress.Track>
              <Progress.Range />
            </Progress.Track>
          </Progress.Root>
        </Stack>
      ))}
    </Stack>
  )
}
