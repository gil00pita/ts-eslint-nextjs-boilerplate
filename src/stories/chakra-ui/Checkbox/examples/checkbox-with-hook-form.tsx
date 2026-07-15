'use client'

import { Button, Checkbox, Code, Field, HStack, Stack } from '@chakra-ui/react'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { Controller, useController, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  enabled: z.boolean(),
})

type FormData = z.infer<typeof formSchema>

export const CheckboxWithHookForm = () => {
  const form = useForm<FormData>({
    defaultValues: { enabled: false },
    resolver: standardSchemaResolver(formSchema),
  })

  const enabled = useController({
    control: form.control,
    name: 'enabled',
  })

  const invalid = !!form.formState.errors.enabled

  return (
    <form onSubmit={form.handleSubmit((data) => console.log(data))}>
      <Stack align="flex-start">
        <Controller
          control={form.control}
          name="enabled"
          render={({ field }) => (
            <Field.Root disabled={field.disabled} invalid={invalid}>
              <Checkbox.Root
                checked={field.value}
                onCheckedChange={({ checked }) => field.onChange(checked)}
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>Checkbox</Checkbox.Label>
              </Checkbox.Root>
              <Field.ErrorText>{form.formState.errors.enabled?.message}</Field.ErrorText>
            </Field.Root>
          )}
        />

        <HStack>
          <Button
            onClick={() => form.setValue('enabled', !enabled.field.value)}
            size="xs"
            variant="outline"
          >
            Toggle
          </Button>
          <Button onClick={() => form.reset()} size="xs" variant="outline">
            Reset
          </Button>
        </HStack>

        <Button alignSelf="flex-start" size="sm" type="submit">
          Submit
        </Button>

        <Code>Checked: {JSON.stringify(enabled.field.value, null, 2)}</Code>
      </Stack>
    </form>
  )
}
