'use client'

import { Combobox, Portal } from '@chakra-ui/react'
import * as React from 'react'

export const ComboboxRoot = Combobox.Root
export const ComboboxLabel = Combobox.Label
export const ComboboxInput = Combobox.Input
export const ComboboxEmpty = Combobox.Empty

export function ComboboxControl(
  props: React.ComponentProps<typeof Combobox.Control> & { clearable?: boolean }
) {
  const { children, clearable, ...rest } = props

  return (
    <Combobox.Control {...rest}>
      {children}
      {clearable && <Combobox.ClearTrigger />}
      <Combobox.Trigger />
    </Combobox.Control>
  )
}

export function ComboboxContent(props: React.ComponentProps<typeof Combobox.Content>) {
  return (
    <Portal>
      <Combobox.Positioner>
        <Combobox.Content {...props} />
      </Combobox.Positioner>
    </Portal>
  )
}

export function ComboboxItem(props: React.ComponentProps<typeof Combobox.Item>) {
  const { children, ...rest } = props

  return (
    <Combobox.Item {...rest}>
      {children}
      <Combobox.ItemIndicator />
    </Combobox.Item>
  )
}
