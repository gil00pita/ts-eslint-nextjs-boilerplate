'use client'

import { Button, DatePicker, Field, Portal, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { LuCalendar } from 'react-icons/lu'

export const DatePickerWithField = () => {
  const [invalid, setInvalid] = useState(false)
  const toggleInvalid = () => setInvalid((prev) => !prev)

  return (
    <Stack align="flex-start" gap="6" maxWidth="20rem">
      <Button onClick={toggleInvalid} size="sm" variant="outline">
        Toggle Invalid
      </Button>
      <Field.Root invalid={invalid}>
        <Field.Label>Date of birth</Field.Label>
        <Field.Context>
          {(ctx) => (
            <DatePicker.Root
              ids={{ input: () => ctx.ids.control, label: () => ctx.ids.label }}
              invalid={ctx.invalid}
            >
              <DatePicker.Control>
                <DatePicker.Input />
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
          )}
        </Field.Context>
        <Field.ErrorText>Date of birth is required</Field.ErrorText>
      </Field.Root>
    </Stack>
  )
}
