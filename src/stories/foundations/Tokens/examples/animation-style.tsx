'use client'

import { Button, Center, For, HStack, Stack } from '@chakra-ui/react'
import { useState } from 'react'

export const TokensAnimationStyle = () => {
  const [animation, setAnimation] = useState<string | undefined>(undefined)
  return (
    <Stack align="flex-start" gap="8" mb="8">
      <HStack wrap="wrap">
        <For each={['slide-fade-in', 'slide-fade-out', 'scale-fade-in', 'scale-fade-out']}>
          {(animation) => (
            <Button
              key={animation}
              onClick={() => setAnimation(animation)}
              size="sm"
              variant="outline"
            >
              {animation}
            </Button>
          )}
        </For>
      </HStack>

      <Center
        animationDuration="slowest"
        animationStyle={animation}
        bg="bg"
        borderWidth="1px"
        data-placement="bottom"
        height="240px"
        onAnimationEnd={() => setAnimation(undefined)}
        p="4"
        width="240px"
      >
        Animation
      </Center>
    </Stack>
  )
}
