import { Editable } from '@chakra-ui/react'

export const EditableWithDoubleClick = () => (
  <Editable.Root activationMode="dblclick" defaultValue="Double click to edit">
    <Editable.Preview />
    <Editable.Input />
  </Editable.Root>
)
