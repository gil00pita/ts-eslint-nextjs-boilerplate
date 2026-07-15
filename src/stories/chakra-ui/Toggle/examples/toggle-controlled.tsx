'use client'

import { Button, Code, Stack, Toggle } from '@chakra-ui/react'
import { useState } from 'react'

export const ToggleControlled = () => {
  const [pressed, setPressed] = useState(false)

  return (
    <Stack align="flex-start">
      <Toggle.Root asChild onPressedChange={setPressed} pressed={pressed}>
        <Button variant={{ _pressed: 'solid', base: 'subtle' }}>Pressed</Button>
      </Toggle.Root>

      <Code fontWeight="medium" size="sm">
        Pressed: {pressed ? 'true' : 'false'}
      </Code>
    </Stack>
  )
}
