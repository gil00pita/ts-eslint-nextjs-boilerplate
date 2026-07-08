'use client'

import { Button, Checkbox, Field, Input, Stack } from '@chakra-ui/react'

export const CheckboxWithForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log(e.currentTarget.elements)
      }}
    >
      <Stack align="flex-start" gap="4" maxW="sm">
        <Field.Root>
          <Field.Label>Username</Field.Label>
          <Input placeholder="username" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Password</Field.Label>
          <Input placeholder="password" />
        </Field.Root>

        <Checkbox.Root mt="2" value="remember me">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Remember me</Checkbox.Label>
        </Checkbox.Root>

        <Button mt="3" type="submit" variant="solid">
          Submit
        </Button>
      </Stack>
    </form>
  )
}
