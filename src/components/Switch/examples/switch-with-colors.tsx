import { Stack, Switch, Text } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const SwitchWithColors = () => {
  return (
    <Stack align="flex-start" gap="2">
      {colorPalettes.map((colorPalette) => (
        <Stack align="center" direction="row" gap="10" key={colorPalette} px="4">
          <Text minW="8ch">{colorPalette}</Text>

          <Switch.Root colorPalette={colorPalette}>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label />
          </Switch.Root>

          <Switch.Root colorPalette={colorPalette} defaultChecked>
            <Switch.HiddenInput />
            <Switch.Control />
            <Switch.Label />
          </Switch.Root>
        </Stack>
      ))}
    </Stack>
  )
}
