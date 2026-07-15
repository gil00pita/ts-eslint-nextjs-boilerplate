'use client'

import { Button, Center, Presence, Stack, useDisclosure } from '@chakra-ui/react'

export const PresenceSlide = () => {
  const { onToggle, open } = useDisclosure()
  return (
    <Stack gap="4">
      <Button alignSelf="flex-start" onClick={onToggle}>
        Click Me
      </Button>
      <Presence
        animationDuration="moderate"
        animationName={{
          _closed: 'slide-to-bottom-full',
          _open: 'slide-from-bottom-full',
        }}
        bottom="0"
        insetX="0"
        position="fixed"
        present={open}
      >
        <Center layerStyle="fill.muted" p="10" roundedTop="md">
          Slide
        </Center>
      </Presence>
    </Stack>
  )
}
