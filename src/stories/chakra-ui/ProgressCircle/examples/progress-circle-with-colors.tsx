import { HStack, ProgressCircle, Stack, Text } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const ProgressCircleWithColors = () => {
  return (
    <Stack align="flex-start" gap="4">
      {colorPalettes.map((colorPalette) => (
        <HStack gap="10" key={colorPalette} px="4">
          <Text minW="8ch">{colorPalette}</Text>

          <ProgressCircle.Root colorPalette={colorPalette} size="sm" value={30}>
            <ProgressCircle.Circle>
              <ProgressCircle.Track />
              <ProgressCircle.Range strokeLinecap="round" />
            </ProgressCircle.Circle>
          </ProgressCircle.Root>

          <ProgressCircle.Root colorPalette={colorPalette} size="md" value={30}>
            <ProgressCircle.Circle>
              <ProgressCircle.Track />
              <ProgressCircle.Range strokeLinecap="round" />
            </ProgressCircle.Circle>
          </ProgressCircle.Root>

          <ProgressCircle.Root colorPalette={colorPalette} size="lg" value={30}>
            <ProgressCircle.Circle>
              <ProgressCircle.Track />
              <ProgressCircle.Range strokeLinecap="round" />
            </ProgressCircle.Circle>
          </ProgressCircle.Root>
        </HStack>
      ))}
    </Stack>
  )
}
