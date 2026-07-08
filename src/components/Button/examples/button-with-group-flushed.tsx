import { Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { LuChevronDown } from 'react-icons/lu'

export const ButtonWithGroupFlushed = () => {
  return (
    <ButtonGroup attached size="sm" variant="outline">
      <Button variant="outline">Button</Button>
      <IconButton variant="outline">
        <LuChevronDown />
      </IconButton>
    </ButtonGroup>
  )
}
