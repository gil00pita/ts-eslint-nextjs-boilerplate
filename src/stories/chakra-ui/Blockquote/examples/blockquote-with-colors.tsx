import { Blockquote, Stack, Text } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const BlockquoteWithColors = () => {
  return (
    <Stack align="flex-start" gap="5">
      {colorPalettes.map((colorPalette) => (
        <Stack align="center" direction="row" gap="10" key={colorPalette} px="4" width="full">
          <Text minW="8ch">{colorPalette}</Text>
          <Blockquote.Root colorPalette={colorPalette}>
            <Blockquote.Content cite="Uzumaki Naruto">
              If anyone thinks he is something when he is nothing, he deceives himself. Each one
              should test his own actions. Then he can take pride in himself, without comparing
              himself to anyone else.
            </Blockquote.Content>
            <Blockquote.Caption>
              — <cite>Uzumaki Naruto</cite>
            </Blockquote.Caption>
          </Blockquote.Root>
        </Stack>
      ))}
    </Stack>
  )
}
