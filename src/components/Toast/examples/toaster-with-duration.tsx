'use client'

import { Button } from '@chakra-ui/react'

import { toaster } from '@/ui/toaster'

export const ToasterWithDuration = () => {
  return (
    <Button
      onClick={() =>
        toaster.create({
          description: 'File saved successfully',
          duration: 6000,
        })
      }
      size="sm"
      variant="outline"
    >
      Show Toast
    </Button>
  )
}
