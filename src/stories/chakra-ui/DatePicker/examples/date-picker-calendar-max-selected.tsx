'use client'

import { DatePicker } from '@chakra-ui/react'

export const DatePickerCalendarMaxSelected = () => {
  return (
    <DatePicker.Root inline maxSelectedDates={3} selectionMode="multiple" width="fit-content">
      <DatePicker.Content unstyled>
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
    </DatePicker.Root>
  )
}
