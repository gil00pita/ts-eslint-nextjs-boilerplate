import { Input, InputGroup, NativeSelect } from '@chakra-ui/react'

const DomainSelect = () => (
  <NativeSelect.Root me="-1" size="xs" variant="plain" width="auto">
    <NativeSelect.Field defaultValue=".com" fontSize="sm">
      <option value=".com">.com</option>
      <option value=".org">.org</option>
      <option value=".net">.net</option>
    </NativeSelect.Field>
    <NativeSelect.Indicator />
  </NativeSelect.Root>
)

export const InputWithSelect = () => {
  return (
    <InputGroup endElement={<DomainSelect />} flex="1" startElement="https://">
      <Input pe="0" placeholder="yoursite.com" ps="4.75em" />
    </InputGroup>
  )
}
