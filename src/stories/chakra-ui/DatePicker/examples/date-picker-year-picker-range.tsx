'use client'

import type { DateValue } from '@chakra-ui/react'

import { DatePicker, Portal } from '@chakra-ui/react'
import { CalendarDate } from '@internationalized/date'
import { LuCalendar } from 'react-icons/lu'

export const DatePickerYearPickerRange = () => {
  return (
    <DatePicker.Root
      defaultView="year"
      format={format}
      maxWidth="20rem"
      minView="year"
      parse={parse}
      placeholder="yyyy"
      selectionMode="range"
    >
      <DatePicker.Label>Select year range</DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Input index={0} />
        <DatePicker.Input index={1} />
        <DatePicker.IndicatorGroup>
          <DatePicker.Trigger>
            <LuCalendar />
          </DatePicker.Trigger>
        </DatePicker.IndicatorGroup>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="year">
              <DatePicker.Header />
              <DatePicker.YearTable />
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  )
}

const format = (date: DateValue) => date.year.toString()

const parse = (string: string) => {
  const fullRegex = /^(\d{4})$/
  const fullMatch = string.match(fullRegex)
  if (fullMatch) {
    const [, year] = fullMatch.map(Number)
    return new CalendarDate(year, 1, 1)
  }
}
