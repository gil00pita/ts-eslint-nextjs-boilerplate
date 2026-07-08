'use client'

import { PinInput } from '@chakra-ui/react'
import { useState } from 'react'

export const PinInputControlled = () => {
  const [value, setValue] = useState(['', '', '', ''])
  return (
    <PinInput.Root onValueChange={(e) => setValue(e.value)} value={value}>
      <PinInput.HiddenInput />
      <PinInput.Control>
        <PinInput.Input index={0} />
        <PinInput.Input index={1} />
        <PinInput.Input index={2} />
        <PinInput.Input index={3} />
      </PinInput.Control>
    </PinInput.Root>
  )
}
