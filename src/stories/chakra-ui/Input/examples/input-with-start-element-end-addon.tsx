import { Input, InputGroup } from '@chakra-ui/react'

export const InputWithStartElementEndAddon = () => {
  return (
    <InputGroup endAddon="USD" startElement="$">
      <Input placeholder="0.00" />
    </InputGroup>
  )
}
