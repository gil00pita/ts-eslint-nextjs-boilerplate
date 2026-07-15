'use client'

import { Button, Show, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

export const ShowWithFallback = () => {
  const [count, setCount] = useState(0)
  return (
    <Stack align="flex-start">
      <Button onClick={() => setCount(count + 1)} variant="outline">
        Value: {count}
      </Button>
      <Show fallback={<Text>Not there yet. Keep clicking...</Text>} when={count > 3}>
        <div>Congrats! I am here</div>
      </Show>
    </Stack>
  )
}
