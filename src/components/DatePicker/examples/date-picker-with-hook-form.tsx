'use client'

import { Button, DatePicker, Field, Input, parseDate, Portal, Stack } from '@chakra-ui/react'
import { standardSchemaResolver } from '@hookform/resolvers/standard-schema'
import { Controller, useForm } from 'react-hook-form'
import { LuCalendar } from 'react-icons/lu'
import { z } from 'zod'

const formSchema = z.object({
  dob: z.string().min(1, { message: 'Date of birth is required' }),
  firstName: z.string().min(1, { message: 'First name is required' }),
})

type FormValues = z.infer<typeof formSchema>

export const DatePickerWithHookForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: standardSchemaResolver(formSchema),
  })

  const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)))

  return (
    <form onSubmit={onSubmit}>
      <Stack align="flex-start" gap="4" maxW="sm">
        <Field.Root invalid={!!errors.firstName}>
          <Field.Label>First name</Field.Label>
          <Input {...register('firstName')} />
          <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
        </Field.Root>

        <Controller
          control={control}
          name="dob"
          render={({ field }) => (
            <Field.Root invalid={!!errors.dob}>
              <DatePicker.Root
                invalid={!!errors.dob}
                onValueChange={(e) => field.onChange(e.value[0]?.toString() ?? '')}
                value={field.value ? [parseDate(field.value)] : []}
              >
                <DatePicker.Label>Date of birth</DatePicker.Label>
                <DatePicker.Control>
                  <DatePicker.Input placeholder="Select date" />
                  <DatePicker.IndicatorGroup>
                    <DatePicker.Trigger>
                      <LuCalendar />
                    </DatePicker.Trigger>
                  </DatePicker.IndicatorGroup>
                </DatePicker.Control>
                <Portal>
                  <DatePicker.Positioner>
                    <DatePicker.Content>
                      <DatePicker.View view="day">
                        <DatePicker.Header />
                        <DatePicker.DayTable />
                      </DatePicker.View>
                      <DatePicker.View view="month">
                        <DatePicker.Header />
                        <DatePicker.MonthTable />
                      </DatePicker.View>
                      <DatePicker.View view="year">
                        <DatePicker.Header />
                        <DatePicker.YearTable />
                      </DatePicker.View>
                    </DatePicker.Content>
                  </DatePicker.Positioner>
                </Portal>
              </DatePicker.Root>
              <Field.ErrorText>{errors.dob?.message}</Field.ErrorText>
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
