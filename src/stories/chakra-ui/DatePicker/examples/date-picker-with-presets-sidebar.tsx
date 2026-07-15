'use client'

import type { DateValue } from '@chakra-ui/react'

import { DatePicker, Flex, HStack, Spacer, Span, Stack } from '@chakra-ui/react'
import { DateFormatter, getLocalTimeZone, isSameDay, isToday, today } from '@internationalized/date'

export const DatePickerWithPresetsSidebar = () => {
  return (
    <DatePicker.Root borderWidth="1px" fixedWeeks inline width="fit-content">
      <Flex flexDirection={{ base: 'column', sm: 'row' }}>
        <Stack
          borderBottomWidth={{ base: '1px', sm: '0' }}
          borderEndWidth={{ base: '0', sm: '1px' }}
          gap="0"
          minW={{ base: 'full', sm: '2xs' }}
          py="2"
        >
          {presets.map((preset) => (
            <DatePicker.Context key={preset.label}>
              {(ctx) => (
                <DatePicker.PresetTrigger
                  _selected={{
                    layerStyle: 'fill.subtle',
                  }}
                  alignItems="center"
                  data-selected={
                    ctx.value.length > 0 && preset.value.compare(ctx.value[0]) === 0
                      ? ''
                      : undefined
                  }
                  display="flex"
                  gap="1"
                  height="10"
                  justifyContent="space-between"
                  px="4"
                  textStyle="sm"
                  value={[preset.value]}
                >
                  <Span>{preset.label}</Span>
                  <Span color="fg.muted" textStyle="sm">
                    {formatShortDate(preset.value, preset.value.toDate(tz))}
                  </Span>
                </DatePicker.PresetTrigger>
              )}
            </DatePicker.Context>
          ))}
        </Stack>

        <DatePicker.View p="3" view="day">
          <HStack gap="0" justify="space-between">
            <DatePicker.RangeText fontWeight="medium" ps="4" />
            <Spacer />
            <DatePicker.PrevTrigger />
            <DatePicker.NextTrigger />
          </HStack>
          <DatePicker.DayTable />
        </DatePicker.View>
      </Flex>
    </DatePicker.Root>
  )
}

const tz = getLocalTimeZone()
const now = today(tz)

const presets = [
  { label: 'Today', value: now },
  { label: 'Tomorrow', value: now.add({ days: 1 }) },
  { label: 'Next week', value: now.add({ weeks: 1 }) },
  { label: '2 weeks', value: now.add({ weeks: 2 }) },
  { label: '4 weeks', value: now.add({ weeks: 4 }) },
]

const weekdayFormatter = new DateFormatter('en-US', { weekday: 'short' })
const shortDateFormatter = new DateFormatter('en-US', {
  day: 'numeric',
  month: 'short',
})

const tomorrow = now.add({ days: 1 })
const formatShortDate = (value: DateValue, display: Date) => {
  if (isToday(value, tz)) return weekdayFormatter.format(display)
  if (isSameDay(value, tomorrow)) return weekdayFormatter.format(display)
  return shortDateFormatter.format(display)
}
