'use client'

import { Button, HStack } from '@chakra-ui/react'

import { DarkMode, LightMode, useColorMode } from '@/ui/color-mode'

export const ColorModeForced = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <HStack>
      <LightMode>
        <Button size="sm" variant="subtle">
          Light Mode Always
        </Button>
      </LightMode>

      <DarkMode>
        <Button size="sm" variant="subtle">
          Dark Mode Always
        </Button>
      </DarkMode>

      <Button onClick={toggleColorMode} size="sm" variant="subtle">
        Toggle Mode
      </Button>
    </HStack>
  )
}
