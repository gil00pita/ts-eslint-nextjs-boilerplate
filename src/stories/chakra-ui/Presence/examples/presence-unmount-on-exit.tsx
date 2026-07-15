'use client'

import { Alert, Button, Center, Presence, Stack, useDisclosure } from '@chakra-ui/react'

export const PresenceUnmountOnExit = () => {
  const { onToggle, open } = useDisclosure()
  return (
    <Stack gap="4">
      <Alert.Root>
        <Alert.Indicator />
        <Alert.Title>
          Check the DOM to see that the element is removed when not present.
        </Alert.Title>
      </Alert.Root>
      <Button alignSelf="flex-start" onClick={onToggle}>
        Click Me
      </Button>
      <Presence
        animationDuration="moderate"
        animationName={{ _closed: 'fade-out', _open: 'fade-in' }}
        present={open}
        unmountOnExit
      >
        <Center layerStyle="fill.muted" p="10">
          Fade
        </Center>
      </Presence>
    </Stack>
  )
}
