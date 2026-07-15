import type { Meta } from '@storybook/nextjs-vite'

import { Box } from '@chakra-ui/react'

import { createComponentPlayground } from '@/utils/storybook/component-playgrounds'

const meta = {
  decorators: [
    (Story) => (
      <Box p="10">
        <Story />
      </Box>
    ),
  ],
  title: 'Date and Time / Date Picker',
} satisfies Meta

export default meta

export const Playground = createComponentPlayground('DatePicker')

export { DatePickerBasic as Basic } from './examples/date-picker-basic'
export { DatePickerCalendarBasic as CalendarBasic } from './examples/date-picker-calendar-basic'
export { DatePickerCalendarControlled as CalendarControlled } from './examples/date-picker-calendar-controlled'
export { DatePickerCalendarDefaultValue as CalendarDefaultValue } from './examples/date-picker-calendar-default-value'
export { DatePickerCalendarHideOutsideDays as CalendarHideOutsideDays } from './examples/date-picker-calendar-hide-outside-days'
export { DatePickerCalendarLocale as CalendarLocale } from './examples/date-picker-calendar-locale'
export { DatePickerCalendarMaxSelected as CalendarMaxSelected } from './examples/date-picker-calendar-max-selected'
export { DatePickerCalendarMinMax as CalendarMinMax } from './examples/date-picker-calendar-min-max'
export { DatePickerCalendarMultiSelection as CalendarMultiSelection } from './examples/date-picker-calendar-multi-selection'
export { DatePickerCalendarMultipleMonths as CalendarMultipleMonths } from './examples/date-picker-calendar-multiple-months'
export { DatePickerCalendarRangeSelection as CalendarRangeSelection } from './examples/date-picker-calendar-range-selection'
export { DatePickerCalendarUnavailable as CalendarUnavailable } from './examples/date-picker-calendar-unavailable'
export { DatePickerCalendarWeekNumbers as CalendarWeekNumbers } from './examples/date-picker-calendar-week-numbers'
export { DatePickerCalendarWithSizes as CalendarWithSizes } from './examples/date-picker-calendar-with-sizes'
export { DatePickerControlled as Controlled } from './examples/date-picker-controlled'
export { DatePickerDefaultValue as DefaultValue } from './examples/date-picker-default-value'
export { DatePickerDefaultView as DefaultView } from './examples/date-picker-default-view'
export { DatePickerDisabled as Disabled } from './examples/date-picker-disabled'
export { DatePickerExplorerDemo as ExplorerDemo } from './examples/date-picker-explorer-demo'
export { DatePickerFixedWeeks as FixedWeeks } from './examples/date-picker-fixed-weeks'
export { DatePickerForm as Form } from './examples/date-picker-form'
export { DatePickerFormatParse as FormatParse } from './examples/date-picker-format-parse'
export { DatePickerLocale as Locale } from './examples/date-picker-locale'
export { DatePickerMinMax as MinMax } from './examples/date-picker-min-max'
export { DatePickerMonthPicker as MonthPicker } from './examples/date-picker-month-picker'
export { DatePickerMonthRange as MonthRange } from './examples/date-picker-month-range'
export { DatePickerMultiSelection as MultiSelection } from './examples/date-picker-multi-selection'
export { DatePickerMultipleMonths as MultipleMonths } from './examples/date-picker-multiple-months'
export { DatePickerOpenOnClick as OpenOnClick } from './examples/date-picker-open-on-click'
export { DatePickerPresets as Presets } from './examples/date-picker-presets'
export { DatePickerRangeSelection as RangeSelection } from './examples/date-picker-range-selection'
export { DatePickerReadOnly as ReadOnly } from './examples/date-picker-read-only'
export { DatePickerRootProvider as RootProvider } from './examples/date-picker-root-provider'
export { DatePickerUnavailable as Unavailable } from './examples/date-picker-unavailable'
export { DatePickerWithButton as WithButton } from './examples/date-picker-with-button'
export { DatePickerWithClear as WithClear } from './examples/date-picker-with-clear'
export { DatePickerWithField as WithField } from './examples/date-picker-with-field'
export { DatePickerWithHeaderLayout as WithHeaderLayout } from './examples/date-picker-with-header-layout'
export { DatePickerWithHookForm as WithHookForm } from './examples/date-picker-with-hook-form'
export { DatePickerWithInputGroup as WithInputGroup } from './examples/date-picker-with-input-group'
export { DatePickerWithMonthYearSelect as WithMonthYearSelect } from './examples/date-picker-with-month-year-select'
export { DatePickerWithOutsideIcon as WithOutsideIcon } from './examples/date-picker-with-outside-icon'
export { DatePickerWithPlacement as WithPlacement } from './examples/date-picker-with-placement'
export { DatePickerWithPresetsSidebar as WithPresetsSidebar } from './examples/date-picker-with-presets-sidebar'
export { DatePickerWithSizes as WithSizes } from './examples/date-picker-with-sizes'
export { DatePickerWithTime as WithTime } from './examples/date-picker-with-time'
export { DatePickerWithTimeGrid as WithTimeGrid } from './examples/date-picker-with-time-grid'
export { DatePickerWithTodayButton as WithTodayButton } from './examples/date-picker-with-today-button'
export { DatePickerWithVariants as WithVariants } from './examples/date-picker-with-variants'
export { DatePickerYearPicker as YearPicker } from './examples/date-picker-year-picker'
export { DatePickerYearPickerRange as YearPickerRange } from './examples/date-picker-year-picker-range'
