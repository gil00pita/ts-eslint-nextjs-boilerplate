'use client'

import type { DateValue, WrapProps } from '@chakra-ui/react'

import { DatePicker, Portal, Tag, Wrap } from '@chakra-ui/react'
import { LuCalendar } from 'react-icons/lu'

export const DatePickerMultiSelection = () => {
  return (
    <DatePicker.Root maxWidth="sm" selectionMode="multiple">
      <DatePicker.Label>Date of birth</DatePicker.Label>

      <DatePicker.Control>
        <DatePickerValueContainer>
          <DatePickerValue />
        </DatePickerValueContainer>

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
  )
}

const formatWithDay = (date: DateValue) => {
  const jsDate = date.toDate('UTC')
  return jsDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
  })
}

const DatePickerValue = () => {
  return (
    <DatePicker.ValueText placeholder="Select dates...">
      {({ index, remove, value }) => (
        <Tag.Root key={index} size="lg" variant="subtle">
          <Tag.Label>{formatWithDay(value)}</Tag.Label>
          <Tag.EndElement>
            <Tag.CloseTrigger onClick={remove} />
          </Tag.EndElement>
        </Tag.Root>
      )}
    </DatePicker.ValueText>
  )
}

const DatePickerValueContainer = (props: WrapProps) => {
  return (
    <Wrap
      alignItems="center"
      borderRadius="l2"
      borderWidth="1px"
      display="flex"
      gap="2"
      minH="10"
      pe="8"
      ps="2.5"
      py="1.5"
      textStyle="sm"
      width="full"
      {...props}
    />
  )
}
