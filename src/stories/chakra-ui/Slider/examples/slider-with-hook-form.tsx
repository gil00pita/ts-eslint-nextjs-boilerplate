'use client'

import { Button, Field, Slider, Stack } from '@chakra-ui/react'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  value: z.array(
    z.number({ message: 'Value is required' }).min(60, { message: 'Value must be greater than 60' })
  ),
})

type FormValues = z.infer<typeof formSchema>

export const SliderWithHookForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: { value: [40] },
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit}>
      <Stack align="flex-start" gap="4" maxW="300px">
        <Controller
          control={control}
          name="value"
          render={({ field }) => (
            <Field.Root invalid={!!errors.value?.length}>
              <Field.Label>Slider: {field.value[0]}</Field.Label>
              <Slider.Root
                name={field.name}
                onFocusChange={({ focusedIndex }) => {
                  if (focusedIndex !== -1) return
                  field.onBlur()
                }}
                onValueChange={({ value }) => {
                  field.onChange(value)
                }}
                value={field.value}
                width="full"
              >
                <Slider.Control>
                  <Slider.Track>
                    <Slider.Range />
                  </Slider.Track>
                  <Slider.Thumbs />
                </Slider.Control>
              </Slider.Root>
              <Field.ErrorText>{errors.value?.[0]?.message}</Field.ErrorText>
            </Field.Root>
          )}
        />

        <Button size="sm" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  )
}
