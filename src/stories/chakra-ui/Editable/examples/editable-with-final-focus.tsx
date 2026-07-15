'use client'

import { Editable, Input, Stack } from '@chakra-ui/react'
import { useRef } from 'react'

export const EditableWithFinalFocus = () => {
  const ref = useRef<HTMLInputElement | null>(null)

  return (
    <Stack>
      <Editable.Root defaultValue="Final fantasy" finalFocusEl={() => ref.current}>
        <Editable.Preview />
        <Editable.Input />
        <Editable.Control>
          <Editable.EditTrigger>Edit</Editable.EditTrigger>
          <Editable.CancelTrigger>Cancel</Editable.CancelTrigger>
          <Editable.SubmitTrigger>Submit</Editable.SubmitTrigger>
        </Editable.Control>
      </Editable.Root>

      <Input placeholder="Placeholder" ref={ref} />
    </Stack>
  )
}
