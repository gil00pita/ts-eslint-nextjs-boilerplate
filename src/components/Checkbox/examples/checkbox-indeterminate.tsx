'use client'

import { Checkbox, Stack } from '@chakra-ui/react'
import { useState } from 'react'

const initialValues = [
  { checked: false, label: 'Monday', value: 'monday' },
  { checked: false, label: 'Tuesday', value: 'tuesday' },
  { checked: false, label: 'Wednesday', value: 'wednesday' },
  { checked: false, label: 'Thursday', value: 'thursday' },
]

export const CheckboxIndeterminate = () => {
  const [values, setValues] = useState(initialValues)

  const allChecked = values.every((value) => value.checked)
  const indeterminate = values.some((value) => value.checked) && !allChecked

  const items = values.map((item, index) => (
    <Checkbox.Root
      checked={item.checked}
      key={item.value}
      ms="6"
      onCheckedChange={(e) => {
        setValues((current) => {
          const newValues = [...current]
          newValues[index] = { ...newValues[index], checked: !!e.checked }
          return newValues
        })
      }}
    >
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>{item.label}</Checkbox.Label>
    </Checkbox.Root>
  ))

  return (
    <Stack align="flex-start">
      <Checkbox.Root
        checked={indeterminate ? 'indeterminate' : allChecked}
        onCheckedChange={(e) => {
          setValues((current) => current.map((value) => ({ ...value, checked: !!e.checked })))
        }}
      >
        <Checkbox.HiddenInput />
        <Checkbox.Control>
          <Checkbox.Indicator />
        </Checkbox.Control>
        <Checkbox.Label>Weekdays</Checkbox.Label>
      </Checkbox.Root>
      {items}
    </Stack>
  )
}
