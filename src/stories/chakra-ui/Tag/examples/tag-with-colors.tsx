import { Stack, Tag, Text } from '@chakra-ui/react'
import { HiPlus } from 'react-icons/hi'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const TagWithColors = () => {
  return (
    <Stack align="flex-start" gap="2">
      {colorPalettes.map((colorPalette) => (
        <Stack align="center" direction="row" gap="10" key={colorPalette} px="4">
          <Text minW="8ch">{colorPalette}</Text>

          <Tag.Root colorPalette={colorPalette} size="sm">
            <Tag.Label>Content</Tag.Label>
          </Tag.Root>
          <Tag.Root colorPalette={colorPalette} size="sm">
            <Tag.StartElement>
              <HiPlus />
            </Tag.StartElement>
            <Tag.Label>Content</Tag.Label>
          </Tag.Root>
          <Tag.Root colorPalette={colorPalette} variant="solid">
            <Tag.Label>Content</Tag.Label>
            <Tag.EndElement>
              <Tag.CloseTrigger />
            </Tag.EndElement>
          </Tag.Root>
        </Stack>
      ))}
    </Stack>
  )
}
