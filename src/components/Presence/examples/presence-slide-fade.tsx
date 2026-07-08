'use client'

import { Button, Center, Presence, Stack, useDisclosure } from '@chakra-ui/react'

export const PresenceSlideFade = () => {
  const { onToggle, open } = useDisclosure()
  return (
    <Stack gap="4">
      <Button alignSelf="flex-start" onClick={onToggle}>
        Click Me
      </Button>
      <Presence
        animationDuration="moderate"
        animationName={{
          _closed: 'slide-to-bottom, fade-out',
          _open: 'slide-from-bottom, fade-in',
        }}
        present={open}
      >
        <Center layerStyle="fill.muted" p="10">
          Slide Fade
        </Center>
      </Presence>
    </Stack>
  )
}
