'use client'

import { Button, Checkbox, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { MdAdsClick } from 'react-icons/md'

export const ButtonWithLoadingToggle = () => {
  const [loading, setLoading] = useState(false)
  return (
    <VStack gap="4">
      <Button loading={loading} onClick={() => setLoading(!loading)}>
        <MdAdsClick /> Click me
      </Button>
      <Checkbox.Root checked={loading} onCheckedChange={() => setLoading(!loading)} size="sm">
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Loading</Checkbox.Label>
      </Checkbox.Root>
    </VStack>
  )
}
