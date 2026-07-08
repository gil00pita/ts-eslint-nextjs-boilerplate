import { Input, InputGroup } from '@chakra-ui/react'

export const InputWithStartAndEndText = () => {
  return (
    <InputGroup endElement="USD" startElement="$">
      <Input placeholder="0.00" />
    </InputGroup>
  )
}
