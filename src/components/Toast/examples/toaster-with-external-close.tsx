'use client'

import { Button, HStack } from '@chakra-ui/react'

import { toaster } from '@/ui/toaster'

export const ToasterWithExternalClose = () => {
  return (
    <HStack>
      <Button
        onClick={() =>
          toaster.create({
            description: 'File saved successfully',
            type: 'info',
          })
        }
        size="sm"
        variant="outline"
      >
        Show Toast
      </Button>

      <Button onClick={() => toaster.dismiss()} size="sm" variant="outline">
        Close Toasts
      </Button>
    </HStack>
  )
}
