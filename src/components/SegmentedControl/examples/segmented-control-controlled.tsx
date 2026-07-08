'use client'

import { SegmentGroup } from '@chakra-ui/react'
import { useState } from 'react'

export const SegmentedControlControlled = () => {
  const [value, setValue] = useState<string | null>('React')
  return (
    <SegmentGroup.Root onValueChange={(e) => setValue(e.value)} value={value}>
      <SegmentGroup.Indicator />
      <SegmentGroup.Items items={['React', 'Vue', 'Solid']} />
    </SegmentGroup.Root>
  )
}
