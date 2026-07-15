'use client'

import { NativeSelect as Select } from '@chakra-ui/react'
import * as React from 'react'

type FieldProp = 'name' | 'value' | 'onChange' | 'defaultValue'

interface NativeSelectProps
  extends Omit<Select.RootProps, FieldProp>, Pick<Select.FieldProps, FieldProp> {
  icon?: React.ReactNode
  items: Array<{ label: string; value: string; disabled?: boolean }>
}

export const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  function NativeSelect(props, ref) {
    const { children, defaultValue, icon, items, name, onChange, value, ...rest } = props
    return (
      <Select.Root {...rest}>
        <Select.Field
          defaultValue={defaultValue}
          name={name}
          onChange={onChange}
          ref={ref}
          value={value}
        >
          {children}
          {items?.map((item) => (
            <option disabled={item.disabled} key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </Select.Field>
        <Select.Indicator>{icon}</Select.Indicator>
      </Select.Root>
    )
  }
)
