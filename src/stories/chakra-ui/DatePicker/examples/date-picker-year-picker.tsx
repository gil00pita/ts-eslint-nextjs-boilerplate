'use client'

import type { DateValue } from '@chakra-ui/react'

import { DatePicker, parseDate, Portal } from '@chakra-ui/react'
import { LuCalendar } from 'react-icons/lu'

export const DatePickerYearPicker = () => {
  return (
    <DatePicker.Root
      defaultView="year"
      format={format}
      maxWidth="20rem"
      minView="year"
      parse={parse}
      placeholder="yyyy"
    >
      <DatePicker.Label>Select year</DatePicker.Label>
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

const parse = (string: string | undefined) => {
  if (string === '' || !string) return
  const year = Number(string)
  if (year < 100) {
    const currentYear = new Date().getFullYear()
    const currentCentury = Math.floor(currentYear / 100) * 100
    return parseDate(new Date(currentCentury + year, 0))
  }
  return parseDate(new Date(Number(string), 0))
}
