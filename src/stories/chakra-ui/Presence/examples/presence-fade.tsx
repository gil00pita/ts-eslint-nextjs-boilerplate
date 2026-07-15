'use client'

import { Button, Center, Presence, Stack, useDisclosure } from '@chakra-ui/react'

export const PresenceFade = () => {
  const { onToggle, open } = useDisclosure()
  return (
    <Stack gap="4">
      <Button alignSelf="flex-start" onClick={onToggle}>
        Click Me
      </Button>
      <Presence
        animationDuration="moderate"
        animationName={{ _closed: 'fade-out', _open: 'fade-in' }}
        present={open}
      >
        <Center layerStyle="fill.muted" p="10">
          Fade
        </Center>
      </Presence>
    </Stack>
  )
}
