'use client'

import { Button, For, HStack } from '@chakra-ui/react'

import { toaster } from '@/ui/toaster'

export const ToasterWithStatus = () => {
  return (
    <HStack>
      <For each={['success', 'error', 'warning', 'info']}>
        {(type) => (
          <Button
            key={type}
            onClick={() =>
              toaster.create({
                title: `Toast status is ${type}`,
                type: type,
              })
            }
            size="sm"
            variant="outline"
          >
            {type}
          </Button>
        )}
      </For>
    </HStack>
  )
}
