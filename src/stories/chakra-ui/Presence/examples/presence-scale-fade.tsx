'use client'

import { Button, Center, Presence, Stack, useDisclosure } from '@chakra-ui/react'

export const PresenceScaleFade = () => {
  const { onToggle, open } = useDisclosure()
  return (
    <Stack gap="4">
      <Button alignSelf="flex-start" onClick={onToggle}>
        Click Me
      </Button>
      <Presence
        animationDuration="moderate"
        animationStyle={{ _closed: 'scale-fade-out', _open: 'scale-fade-in' }}
        present={open}
      >
        <Center layerStyle="fill.muted" p="10">
          Scale Fade
        </Center>
      </Presence>
    </Stack>
  )
}
