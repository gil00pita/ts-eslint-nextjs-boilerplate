'use client'

import { NumberInput } from '@chakra-ui/react'
import { useState } from 'react'

export const NumberInputControlled = () => {
  const [value, setValue] = useState('10')
  return (
    <NumberInput.Root maxW="200px" onValueChange={(e) => setValue(e.value)} value={value}>
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
