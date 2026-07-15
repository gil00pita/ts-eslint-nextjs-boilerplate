'use client'

import { Box, Button, Center, DatePicker, Flex, HStack, Stack, Text } from '@chakra-ui/react'
import { type DateValue, getLocalTimeZone, isToday, isWeekend, Time } from '@internationalized/date'
import { useState } from 'react'
import { LuGlobe } from 'react-icons/lu'

const tz = getLocalTimeZone()

export const DatePickerWithTimeGrid = () => {
  const [selectedDate, setSelectedDate] = useState<DateValue[]>([])
  const [selectedTime, setSelectedTime] = useState<Time | null>(null)

  const date = selectedDate[0]
  const slots = date ? generateTimeSlots(date) : []
  const nativeDate = date?.toDate(tz)

  const handleDateChange = (details: { value: DateValue[] }) => {
    setSelectedDate(details.value)
    setSelectedTime(null)
  }

  const handleTimeClick = (time: Time) => {
    setSelectedTime(selectedTime && selectedTime.compare(time) === 0 ? null : time)
  }

  return (
    <Flex
      borderWidth="1px"
      direction={{ base: 'column', md: 'row' }}
      overflow="hidden"
      rounded="xl"
      width="fit-content"
    >
      {/* Calendar */}
      <Box borderBottomWidth={{ base: '1px', md: '0' }} borderEndWidth={{ md: '1px' }}>
        <Stack gap="0" px="5" py="5">
          <Text fontWeight="semibold" textStyle="lg">
            Select a Date
          </Text>
          <Text color="fg.muted" textStyle="sm">
            Pick a day for your meeting
          </Text>
        </Stack>

        <DatePicker.Root
          inline
          isDateUnavailable={(date) => isWeekend(date, 'en-US')}
          onValueChange={handleDateChange}
          value={selectedDate}
          width="fit-content"
        >
          <DatePicker.Content pb="4" px="3" unstyled>
            <DatePicker.View view="day">
              <HStack gap="0" justify="space-between">
                <DatePicker.PrevTrigger />
                <DatePicker.RangeText fontWeight="medium" textStyle="sm" />
                <DatePicker.NextTrigger />
              </HStack>
              <DatePicker.DayTable />
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Root>

        <HStack color="fg.muted" pb="4" px="5" textStyle="xs">
          <LuGlobe />
          <span>{tz}</span>
        </HStack>
      </Box>

      {/* Time slots */}
      <Stack flex="1" minW="240px">
        {date && nativeDate ? (
          <Stack flex="1" gap="0">
            <Stack gap="0" pb="3" pt="5" px="5">
              <Text fontWeight="semibold">
                {isToday(date, tz) ? 'Today' : formatWeekday(nativeDate)}
              </Text>
              <Text color="fg.muted" textStyle="sm">
                {formatMonthDay(nativeDate)}
              </Text>
            </Stack>

            <TimeGrid onTimeClick={handleTimeClick} selectedTime={selectedTime} slots={slots} />
          </Stack>
        ) : (
          <Center color="fg.muted" height="full" px="8" py="10">
            <Stack align="center" gap="1" textAlign="center">
              <Text fontWeight="medium" textStyle="sm">
                Select a date
              </Text>
              <Text textStyle="xs">Available time slots will appear here</Text>
            </Stack>
          </Center>
        )}
      </Stack>
    </Flex>
  )
}

/* --- TimeGrid component --- */

interface TimeGridProps {
  slots: Time[]
  selectedTime: Time | null
  onTimeClick: (time: Time) => void
}

const TimeGrid = (props: TimeGridProps) => {
  const { onTimeClick, selectedTime, slots } = props

  return (
    <Stack flex="1" gap="2" maxH="380px" overflowY="auto" pb="4" px="4">
      {slots.map((time) => {
        const isSelected = selectedTime != null && selectedTime.compare(time) === 0
        const label = formatTime(time)

        return (
          <Button
            fontWeight="semibold"
            key={label}
            onClick={() => onTimeClick(time)}
            rounded="lg"
            size="sm"
            variant={isSelected ? 'solid' : 'outline'}
          >
            {label}
          </Button>
        )
      })}
    </Stack>
  )
}

/* --- Utilities --- */

const generateTimeSlots = (date: DateValue): Time[] => {
  const day = date.toDate(tz).getDay()
  const slots: Time[] = []
  const start = 9
  const end = day === 5 ? 14 : 17

  for (let hour = start; hour < end; hour++) {
    slots.push(new Time(hour, 0))
    if (hour < end - 1 || day !== 5) {
      slots.push(new Time(hour, 30))
    }
  }

  // simulate some unavailable slots
  const seed = date.day + date.month
  return slots.filter((_, i) => (i + seed) % 5 !== 0)
}

const formatTime = (time: Time) =>
  `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}`

const formatWeekday = (date: Date) => date.toLocaleDateString('en-US', { weekday: 'long' })

const formatMonthDay = (date: Date) =>
  date.toLocaleDateString('en-US', { day: 'numeric', month: 'long' })
