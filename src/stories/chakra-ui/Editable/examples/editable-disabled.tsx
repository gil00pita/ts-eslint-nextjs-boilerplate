import { Editable } from '@chakra-ui/react'

export const EditableDisabled = () => {
  return (
    <Editable.Root defaultValue="Click to edit" disabled>
      <Editable.Preview cursor="not-allowed" opacity={0.5} />
      <Editable.Input />
    </Editable.Root>
  )
}
