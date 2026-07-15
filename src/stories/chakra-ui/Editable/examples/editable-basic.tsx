import { Editable } from '@chakra-ui/react'

export const EditableBasic = () => (
  <Editable.Root defaultValue="Click to edit" textAlign="start">
    <Editable.Preview />
    <Editable.Input />
  </Editable.Root>
)
