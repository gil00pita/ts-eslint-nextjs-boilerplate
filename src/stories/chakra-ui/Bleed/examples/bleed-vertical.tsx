import { Bleed, Box } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const BleedVertical = () => {
  return (
    <Box borderWidth="1px" padding="10" rounded="sm">
      <Bleed block="10">
        <DecorativeBox height="20">Bleed</DecorativeBox>
      </Bleed>
    </Box>
  )
}
