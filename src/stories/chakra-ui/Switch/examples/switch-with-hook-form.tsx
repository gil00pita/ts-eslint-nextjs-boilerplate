'use client'

import { Button, Field, Stack, Switch } from '@chakra-ui/react'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  active: z.boolean({ message: 'Active is required' }),
})

type FormData = z.infer<typeof formSchema>

export const SwitchWithHookForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: standardSchemaResolver(formSchema),
  })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Stack align="flex-start">
        <Controller
          control={control}
          name="active"
          render={({ field }) => (
            <Field.Root invalid={!!errors.active}>
              <Switch.Root
                checked={field.value}
                name={field.name}
                onCheckedChange={({ checked }) => field.onChange(checked)}
              >
                <Switch.HiddenInput onBlur={field.onBlur} />
                <Switch.Control />
                <Switch.Label>Activate Chakra</Switch.Label>
              </Switch.Root>
              <Field.ErrorText>{errors.active?.message}</Field.ErrorText>
            </Field.Root>
          )}
        />
        <Button mt="4" size="sm" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  )
}
