'use client'

import { Button } from '@chakra-ui/react'

import { toaster } from '@/ui/toaster'

export const ToasterClosable = () => {
  return (
    <Button
      onClick={() =>
        toaster.create({
          closable: true,
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
