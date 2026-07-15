import { Editable, IconButton } from '@chakra-ui/react'
import { LuCheck, LuPencilLine, LuX } from 'react-icons/lu'

export const EditableWithControls = () => {
  return (
    <Editable.Root defaultValue="Click to edit">
      <Editable.Preview />
      <Editable.Input />
      <Editable.Control>
        <Editable.EditTrigger asChild>
          <IconButton size="xs" variant="ghost">
            <LuPencilLine />
          </IconButton>
        </Editable.EditTrigger>
        <Editable.CancelTrigger asChild>
          <IconButton size="xs" variant="outline">
            <LuX />
          </IconButton>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <IconButton size="xs" variant="outline">
            <LuCheck />
          </IconButton>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable.Root>
  )
}
