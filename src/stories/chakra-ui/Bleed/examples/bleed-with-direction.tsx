import { Bleed, Box, Stack } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const BleedWithDirection = () => {
  return (
    <Stack gap="8">
      <Box borderWidth="1px" padding="8" rounded="sm">
        <Bleed inlineStart="8">
          <DecorativeBox height="8">inlineStart</DecorativeBox>
        </Bleed>
      </Box>

      <Box borderWidth="1px" padding="8" rounded="sm">
        <Bleed inlineEnd="8">
          <DecorativeBox height="8">inlineEnd</DecorativeBox>
        </Bleed>
      </Box>

      <Box borderWidth="1px" padding="8" rounded="sm">
        <Bleed blockStart="8">
          <DecorativeBox height="8">blockStart</DecorativeBox>
        </Bleed>
      </Box>

      <Box borderWidth="1px" padding="8" rounded="sm">
        <Bleed blockEnd="8">
          <DecorativeBox height="8">blockEnd</DecorativeBox>
        </Bleed>
      </Box>
    </Stack>
  )
}
