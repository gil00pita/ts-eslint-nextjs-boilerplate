'use client'

import { Button, Field, Input, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { PasswordInput } from '@/ui/password-input'

interface FormValues {
  username: string
  password: string
}

export const PasswordInputWithHookForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Stack align="flex-start" gap="4" maxW="sm">
        <Field.Root invalid={!!errors.username}>
          <Field.Label>Username</Field.Label>
          <Input {...register('username')} />
          <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
        </Field.Root>

        <Field.Root invalid={!!errors.password}>
          <Field.Label>Password</Field.Label>
          <PasswordInput {...register('password')} />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>

        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  )
}
