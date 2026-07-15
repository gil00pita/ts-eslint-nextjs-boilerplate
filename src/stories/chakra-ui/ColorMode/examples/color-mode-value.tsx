'use client'

import { Box, Button, Stack } from '@chakra-ui/react'

import { useColorMode, useColorModeValue } from '@/ui/color-mode'

export const ColorModeValue = () => {
  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')

  return (
    <Stack align="flex-start" gap="4">
      <Box bg={bg} color={color} p="2">
        This box&apos;s style will change based on the color mode.
      </Box>
      <Button onClick={toggleColorMode} size="sm" variant="outline">
        Toggle Mode
      </Button>
    </Stack>
  )
}
