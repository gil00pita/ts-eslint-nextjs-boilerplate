'use client'

import { Button, useClipboard } from '@chakra-ui/react'

export const ClipboardWithStore = () => {
  const clipboard = useClipboard({ value: 'https://chakra-ui.com' })
  return (
    <Button onClick={clipboard.copy} size="sm" variant="surface">
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  )
}
