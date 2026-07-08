import { Avatar, Stack, Text } from '@chakra-ui/react'

import { colorPalettes } from '@/utils/storybook/color-palettes'

export const AvatarWithColors = () => {
  return (
    <Stack align="flex-start" gap="2">
      {colorPalettes.map((colorPalette) => (
        <Stack align="center" direction="row" gap="10" key={colorPalette}>
          <Text minW="8ch">{colorPalette}</Text>
          <Avatar.Root colorPalette={colorPalette}>
            <Avatar.Fallback name="Segun Adebayo" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
          <Avatar.Root colorPalette={colorPalette}>
            <Avatar.Fallback name="Segun Adebayo" />
          </Avatar.Root>
          <Avatar.Root colorPalette={colorPalette}>
            <Avatar.Fallback />
          </Avatar.Root>
        </Stack>
      ))}
    </Stack>
  )
}
