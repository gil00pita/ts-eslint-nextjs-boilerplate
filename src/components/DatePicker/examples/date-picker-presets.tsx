'use client'

import { Button, DatePicker, Flex, Portal, VStack } from '@chakra-ui/react'
import { LuCalendar } from 'react-icons/lu'

export const DatePickerPresets = () => {
  return (
    <DatePicker.Root maxWidth="32rem" selectionMode="range">
      <DatePicker.Label>Select range</DatePicker.Label>
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
          <DatePicker.Content maxW="100dvw" overflow="auto" w="fit-content">
            <Flex
              flexDirection={{ base: 'column', sm: 'row' }}
              gap={{ base: '3', sm: '6' }}
              px={{ base: '3', sm: '4' }}
              py={{ base: '3', sm: '4' }}
            >
              <VStack
                align="stretch"
                gap={{ base: '1.5', sm: '2' }}
                height="100%"
                minW={{ base: 'full', sm: '140px' }}
              >
                <DatePicker.PresetTrigger asChild value="last7Days">
                  <Button size="sm" variant="surface" width="100%">
                    Last 7 days
                  </Button>
                </DatePicker.PresetTrigger>
                <DatePicker.PresetTrigger asChild value="last30Days">
                  <Button size="sm" variant="surface" width="100%">
                    Last 30 days
                  </Button>
                </DatePicker.PresetTrigger>
                <DatePicker.PresetTrigger asChild value="thisMonth">
                  <Button size="sm" variant="surface" width="100%">
                    This month
                  </Button>
                </DatePicker.PresetTrigger>
                <DatePicker.PresetTrigger asChild value="lastMonth">
                  <Button size="sm" variant="surface" width="100%">
                    Last month
                  </Button>
                </DatePicker.PresetTrigger>
                <DatePicker.PresetTrigger asChild value="thisYear">
                  <Button size="sm" variant="surface" width="100%">
                    This year
                  </Button>
                </DatePicker.PresetTrigger>
                <DatePicker.PresetTrigger asChild value="lastYear">
                  <Button size="sm" variant="surface" width="100%">
                    Last year
                  </Button>
                </DatePicker.PresetTrigger>
              </VStack>
              <Flex direction="column" flex="1" minW={0}>
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
              </Flex>
            </Flex>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  )
}
