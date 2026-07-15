'use client'

import { Button } from '@chakra-ui/react'

import { useColorMode } from '@/ui/color-mode'

export const ColorModeBasic = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode} variant="outline">
      Toggle Mode
    </Button>
  )
}
