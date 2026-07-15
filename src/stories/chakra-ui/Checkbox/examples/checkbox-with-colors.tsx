import { Checkbox, For, Stack, Text } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const CheckboxWithColors = () => {
  return (
    <Stack align="flex-start" gap="2">
      {colorPalettes.map((colorPalette) => (
        <Stack align="center" direction="row" gap="10" key={colorPalette} width="full">
          <Text minW="8ch">{colorPalette}</Text>
          <For each={['outline', 'subtle', 'solid']}>
            {(variant) => (
              <Stack key={variant} mb="4">
                <Checkbox.Root colorPalette={colorPalette} variant={variant}>
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label>Checkbox</Checkbox.Label>
                </Checkbox.Root>

                <Checkbox.Root colorPalette={colorPalette} defaultChecked variant={variant}>
                  <Checkbox.HiddenInput />
                  <Checkbox.Control />
                  <Checkbox.Label>Checkbox</Checkbox.Label>
                </Checkbox.Root>
              </Stack>
            )}
          </For>
        </Stack>
      ))}
    </Stack>
  )
}
