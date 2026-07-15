'use client'

import { Badge, DatePicker, For, Stack } from '@chakra-ui/react'

export const DatePickerCalendarWithSizes = () => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={8}>
      <For each={['xs', 'sm', 'md', 'lg', 'xl']}>
        {(size) => (
          <Stack align="flex-start" gap={2} key={size}>
            <Badge variant="outline" width="fit-content">
              {size}
            </Badge>
            <DatePicker.Root inline size={size} width="fit-content">
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
          </Stack>
        )}
      </For>
    </Stack>
  )
}
