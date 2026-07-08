import { HStack, RadioGroup, Stack, Text } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const RadioWithColors = () => {
  return (
    <Stack align="flex-start" gap="2">
      {colorPalettes.map((colorPalette) => (
        <HStack gap="10" key={colorPalette} px="4">
          <Text minW="8ch">{colorPalette}</Text>

          <RadioGroup.Root colorPalette={colorPalette} defaultValue="react" spaceX="8">
            {items.map((item) => (
              <RadioGroup.Item key={item.value} value={item.value}>
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </RadioGroup.Root>
        </HStack>
      ))}
    </Stack>
  )
}

const items = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Solid', value: 'solid' },
]
