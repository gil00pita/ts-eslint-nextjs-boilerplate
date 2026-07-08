'use client'

import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'
import * as React from 'react'

export interface CheckboxProps extends React.ComponentProps<typeof ChakraCheckbox.Root> {
  children?: React.ReactNode
}

export function Checkbox(props: CheckboxProps) {
  const { children = 'Checkbox', ...rest } = props

  return (
    <ChakraCheckbox.Root {...rest}>
      <ChakraCheckbox.HiddenInput />
      <ChakraCheckbox.Control />
      <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>
    </ChakraCheckbox.Root>
  )
}
