'use client'

import { Button } from '@chakra-ui/react'

import { toaster } from '@/ui/toaster'

export const ToasterWithPromise = () => {
  return (
    <Button
      onClick={() => {
        const promise = new Promise<void>((resolve) => {
          setTimeout(() => resolve(), 5000)
        })

        toaster.promise(promise, {
          error: {
            description: 'Something wrong with the upload',
            title: 'Upload failed',
          },
          loading: { description: 'Please wait', title: 'Uploading...' },
          success: {
            description: 'Looks great',
            title: 'Successfully uploaded!',
          },
        })
      }}
      size="sm"
      variant="outline"
    >
      Show Toast
    </Button>
  )
}
