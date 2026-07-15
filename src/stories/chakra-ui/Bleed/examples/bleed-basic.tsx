import { Bleed, Box, Heading, Stack, Text } from '@chakra-ui/react'

import { DecorativeBox } from '@/utils/storybook/decorative-box'

export const BleedBasic = () => {
  return (
    <Box borderWidth="1px" padding="10" rounded="sm">
      <Bleed inline="10">
        <DecorativeBox height="20">Bleed</DecorativeBox>
      </Bleed>

      <Stack mt="6">
        <Heading size="md">Some Heading</Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Stack>
    </Box>
  )
}
