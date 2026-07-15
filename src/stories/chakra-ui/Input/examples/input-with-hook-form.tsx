'use client'

import { Button, Field, Input, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

interface FormValues {
  firstName: string
  lastName: string
}

export const InputWithHookForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Stack align="flex-start" gap="4" maxW="sm">
        <Field.Root invalid={!!errors.firstName}>
          <Field.Label>First name</Field.Label>
          <Input {...register('firstName')} />
          <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.lastName}>
          <Field.Label>Last name</Field.Label>
          <Input {...register('lastName')} />
          <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  )
}
