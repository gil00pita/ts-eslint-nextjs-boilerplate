import { Input, InputGroup } from '@chakra-ui/react'

export const InputWithStartText = () => {
  return (
    <InputGroup startElement="https://" startElementProps={{ color: 'fg.muted' }}>
      <Input placeholder="yoursite.com" ps="7ch" />
    </InputGroup>
  )
}
