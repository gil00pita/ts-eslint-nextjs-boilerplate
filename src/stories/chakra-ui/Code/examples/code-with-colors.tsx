import { Code, Stack, Text } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const CodeWithColors = () => {
  return (
    <Stack align="flex-start" gap="2">
      {colorPalettes.map((colorPalette) => (
        <Stack align="center" direction="row" gap="10" key={colorPalette} px="4" width="full">
          <Text minW="8ch" textStyle="sm">
            {colorPalette}
          </Text>
          <Code colorPalette={colorPalette} variant="solid">
            {`console.log()`}
          </Code>
          <Code colorPalette={colorPalette} variant="outline">
            {`console.log()`}
          </Code>
          <Code colorPalette={colorPalette} variant="subtle">
            {`console.log()`}
          </Code>
          <Code colorPalette={colorPalette} variant="surface">
            {`console.log()`}
          </Code>
        </Stack>
      ))}
    </Stack>
  )
}
