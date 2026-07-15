'use client'

import { QrCode, SegmentGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'

type ErrorLevel = 'L' | 'M' | 'Q' | 'H'

export const QrCodeWithErrorLevel = () => {
  const [errorLevel, setErrorLevel] = useState<ErrorLevel>('L')
  return (
    <Stack align="flex-start">
      <QrCode.Root encoding={{ ecc: errorLevel }} size="xl" value="https://www.google.com">
        <QrCode.Frame />
      </QrCode.Root>
      <SegmentGroup.Root
        defaultValue={'L'}
        onValueChange={(e) => setErrorLevel(e.value as ErrorLevel)}
        size="sm"
      >
        <SegmentGroup.Indicator />
        <SegmentGroup.Items items={['L', 'M', 'Q', 'H']} />
      </SegmentGroup.Root>
    </Stack>
  )
}
