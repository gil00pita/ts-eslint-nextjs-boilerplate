import { Checkbox } from '@chakra-ui/react'

export const CheckboxExplorerDemo = () => {
  return (
    <Checkbox.Group defaultValue={['terms']} flexDirection="column" gap="4">
      <Checkbox.Root value="terms">
        <Checkbox.HiddenInput />
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label>Accept terms and conditions</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root value="newsletter">
        <Checkbox.HiddenInput />
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label>Subscribe to newsletter</Checkbox.Label>
      </Checkbox.Root>

      <Checkbox.Root value="updates">
        <Checkbox.HiddenInput />
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label>Receive product updates</Checkbox.Label>
      </Checkbox.Root>
    </Checkbox.Group>
  )
}
