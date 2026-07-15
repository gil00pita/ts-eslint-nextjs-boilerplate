'use client'

import { Button, Field, Stack, Textarea } from '@chakra-ui/react'

export const TextareaWithForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log('submitted')
      }}
    >
      <Stack gap="4" maxW="sm">
        <Field.Root>
          <Field.Label>Issue Details</Field.Label>
          <Textarea placeholder="Type your message here..." />
          <Field.HelperText>
            You can @mention people and refer to issues and pull requests.
          </Field.HelperText>
        </Field.Root>
        <Button alignSelf="flex-start" mt="3" variant="solid">
          Submit
        </Button>
      </Stack>
    </form>
  )
}
