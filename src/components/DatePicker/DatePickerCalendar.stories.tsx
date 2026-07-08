import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'
import type { Meta } from '@storybook/react-vite'
import { Box } from '@chakra-ui/react'

export default {
  title: 'Components / Date Picker Calendar',
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
} satisfies Meta

export const Playground = createComponentPlayground('DatePickerCalendar')

export { DatePickerCalendarBasic as Basic } from './examples/date-picker-calendar-basic'
export { DatePickerCalendarWithSizes as Sizes } from './examples/date-picker-calendar-with-sizes'
export { DatePickerCalendarHideOutsideDays as HideOutsideDays } from './examples/date-picker-calendar-hide-outside-days'
export { DatePickerCalendarControlled as Controlled } from './examples/date-picker-calendar-controlled'
export { DatePickerCalendarDefaultValue as DefaultValue } from './examples/date-picker-calendar-default-value'
export { DatePickerCalendarRangeSelection as RangeSelection } from './examples/date-picker-calendar-range-selection'
export { DatePickerCalendarMultiSelection as MultiSelection } from './examples/date-picker-calendar-multi-selection'
export { DatePickerCalendarMinMax as MinMax } from './examples/date-picker-calendar-min-max'
export { DatePickerCalendarUnavailable as UnavailableDates } from './examples/date-picker-calendar-unavailable'
export { DatePickerCalendarMultipleMonths as MultipleMonths } from './examples/date-picker-calendar-multiple-months'
export { DatePickerCalendarLocale as Locale } from './examples/date-picker-calendar-locale'
export { DatePickerWithTimeGrid as TimeGrid } from './examples/date-picker-with-time-grid'
export { DatePickerCalendarMaxSelected as MaxSelected } from './examples/date-picker-calendar-max-selected'
export { DatePickerCalendarWeekNumbers as WeekNumbers } from './examples/date-picker-calendar-week-numbers'
