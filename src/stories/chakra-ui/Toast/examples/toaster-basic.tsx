'use client'

import { Button } from '@chakra-ui/react'

import { toaster } from '@/ui/toaster'

export const ToasterBasic = () => {
  return (
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
  )
}
