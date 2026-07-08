'use client'

import { Switch as ChakraSwitch } from '@chakra-ui/react'
import * as React from 'react'

export interface SwitchProps extends React.ComponentProps<typeof ChakraSwitch.Root> {
  children?: React.ReactNode
}

export function Switch(props: SwitchProps) {
  const { children, ...rest } = props

  return (
    <ChakraSwitch.Root {...rest}>
      <ChakraSwitch.HiddenInput />
      <ChakraSwitch.Control />
      {children && <ChakraSwitch.Label>{children}</ChakraSwitch.Label>}
    </ChakraSwitch.Root>
  )
}
