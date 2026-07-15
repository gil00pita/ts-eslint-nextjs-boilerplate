'use client'

import { Button } from '@chakra-ui/react'

import { toaster } from '@/ui/toaster'

export const ToasterWithAction = () => {
  return (
    <Button
      onClick={() =>
        toaster.success({
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
          description: 'File saved successfully to the server',
          title: 'Update successful',
        })
      }
      size="sm"
      variant="outline"
    >
      Click me
    </Button>
  )
}
