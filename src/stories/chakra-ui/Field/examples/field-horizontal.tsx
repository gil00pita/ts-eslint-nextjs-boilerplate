import { Field, Input, Stack, Switch } from '@chakra-ui/react'

export const FieldHorizontal = () => {
  return (
    <Stack css={{ '--field-label-width': '96px' }} gap="8" maxW="sm">
      <Field.Root orientation="horizontal">
        <Field.Label>Name</Field.Label>
        <Input flex="1" placeholder="John Doe" />
      </Field.Root>

      <Field.Root orientation="horizontal">
        <Field.Label>Email</Field.Label>
        <Input flex="1" placeholder="me@example.com" />
      </Field.Root>

      <Field.Root orientation="horizontal">
        <Field.Label>Hide email</Field.Label>
        <Switch.Root>
          <Switch.HiddenInput />
          <Switch.Control />
        </Switch.Root>
      </Field.Root>
    </Stack>
  )
}
