'use client'

import { Button, HStack } from '@chakra-ui/react'

import { toaster } from '@/ui/toaster'

export const ToasterWithUpdate = () => {
  const id = 'login-error-toast'

  const show = () => {
    if (toaster.isVisible(id)) return
    toaster.loading({
      description: 'You do not have permissions to perform this action.',
      id,
      title: 'Error Connecting...',
    })
  }

  const update = () => {
    toaster.update(id, {
      description: 'You now have permissions to perform this action.',
      duration: 3000,
      title: 'Hooray 🥳🥳🥳!!!',
      type: 'success',
    })
  }

  return (
    <HStack>
      <Button onClick={show} size="sm" variant="outline">
        Show Toast
      </Button>
      <Button onClick={update} size="sm" variant="outline">
        Update Toast
      </Button>
    </HStack>
  )
}
