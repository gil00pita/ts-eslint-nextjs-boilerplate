'use client'

import { Button, Fieldset, HStack, RadioGroup } from '@chakra-ui/react'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const items = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

const formSchema = z.object({
  value: z.string({ message: 'Value is required' }),
})

type FormValues = z.infer<typeof formSchema>

export const RadioWithHookForm = () => {
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
      <Fieldset.Root invalid={!!errors.value}>
        <Fieldset.Legend>Select value</Fieldset.Legend>
        <Controller
          control={control}
          name="value"
          render={({ field }) => (
            <RadioGroup.Root
              name={field.name}
              onValueChange={({ value }) => {
                field.onChange(value)
              }}
              value={field.value}
            >
              <HStack gap="6">
                {items.map((item) => (
                  <RadioGroup.Item key={item.value} value={item.value}>
                    <RadioGroup.ItemHiddenInput onBlur={field.onBlur} />
                    <RadioGroup.ItemIndicator />
                    <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                  </RadioGroup.Item>
                ))}
              </HStack>
            </RadioGroup.Root>
          )}
        />

        {errors.value && <Fieldset.ErrorText>{errors.value?.message}</Fieldset.ErrorText>}

        <Button alignSelf="flex-start" size="sm" type="submit">
          Submit
        </Button>
      </Fieldset.Root>
    </form>
  )
}
