'use client'

import { Button, Skeleton, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

export const SkeletonWithLoaded = () => {
  const [loading, setLoading] = useState(true)

  return (
    <Stack align="flex-start" gap="4">
      <Skeleton height="6" loading={loading}>
        <Text>Chakra UI is cool</Text>
      </Skeleton>
      <Button onClick={() => setLoading((c) => !c)} size="sm">
        Toggle
      </Button>
    </Stack>
  )
}
