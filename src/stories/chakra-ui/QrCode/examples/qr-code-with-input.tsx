'use client'

import { Input, QrCode, Stack } from '@chakra-ui/react'
import { useState } from 'react'

export const QrCodeWithInput = () => {
  const [value, setValue] = useState('https://www.google.com')
  return (
    <Stack gap="4" maxW="240px">
      <QrCode.Root value={value}>
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
      <Input onChange={(e) => setValue(e.target.value)} value={value} />
    </Stack>
  )
}
