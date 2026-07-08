import { Input, InputGroup } from '@chakra-ui/react'

export const InputWithStartAndEndAddon = () => {
  return (
    <InputGroup endAddon="USD" startAddon="$">
      <Input placeholder="0.00" />
    </InputGroup>
  )
}
