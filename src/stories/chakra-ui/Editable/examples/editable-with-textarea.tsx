import { Editable } from '@chakra-ui/react'

export const EditableWithTextarea = () => {
  return (
    <Editable.Root defaultValue="Click to edit">
      <Editable.Preview alignItems="flex-start" minH="48px" width="full" />
      <Editable.Textarea />
    </Editable.Root>
  )
}
