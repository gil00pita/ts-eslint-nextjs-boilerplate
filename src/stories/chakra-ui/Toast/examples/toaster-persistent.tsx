'use client'

import { Button } from '@chakra-ui/react'

import { toaster } from '@/ui/toaster'

export const ToasterPersistent = () => {
  return (
    <Button
      onClick={() =>
        toaster.create({
          description: 'File saved successfully',
          type: 'loading',
        })
      }
      size="sm"
      variant="outline"
    >
      Show Toast
    </Button>
  )
}
