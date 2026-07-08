'use client'

import { Editable } from '@chakra-ui/react'
import { useState } from 'react'

export const EditableControlled = () => {
  const [name, setName] = useState('')
  return (
    <Editable.Root onValueChange={(e) => setName(e.value)} placeholder="Click to edit" value={name}>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  )
}
