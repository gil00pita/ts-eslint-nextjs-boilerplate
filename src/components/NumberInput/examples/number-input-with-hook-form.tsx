'use client'

import { Button, Field, NumberInput } from '@chakra-ui/react'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  number: z.string({ message: 'Number is required' }),
})

type FormValues = z.infer<typeof formSchema>

export const NumberInputWithHookForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Field.Root invalid={!!errors.number}>
        <Field.Label>Number</Field.Label>
        <Controller
          control={control}
          name="number"
          render={({ field }) => (
            <NumberInput.Root
              disabled={field.disabled}
              name={field.name}
              onValueChange={({ value }) => {
                field.onChange(value)
              }}
              value={field.value}
            >
              <NumberInput.Control />
              <NumberInput.Input onBlur={field.onBlur} />
            </NumberInput.Root>
          )}
        />
        <Field.ErrorText>{errors.number?.message}</Field.ErrorText>
      </Field.Root>
      <Button mt="4" size="sm" type="submit">
        Submit
      </Button>
    </form>
  )
}
