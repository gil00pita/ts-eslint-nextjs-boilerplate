import { Input, InputGroup, Kbd } from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu'

export const InputWithKbd = () => (
  <InputGroup endElement={<Kbd>⌘K</Kbd>} flex="1" startElement={<LuSearch />}>
    <Input placeholder="Search contacts" />
  </InputGroup>
)
