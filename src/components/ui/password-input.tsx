'use client'

import type { InputProps, StackProps } from '@chakra-ui/react'

import { Box, IconButton, Input, InputGroup, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'

export interface PasswordInputProps extends Omit<InputProps, 'type'> {
  defaultVisible?: boolean
  visible?: boolean
  onVisibleChange?: (visible: boolean) => void
}

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(props, ref) {
    const { defaultVisible = false, onVisibleChange, visible, ...inputProps } = props
    const [localVisible, setLocalVisible] = React.useState(defaultVisible)
    const isVisible = visible ?? localVisible

    const setVisible = (nextVisible: boolean) => {
      if (visible === undefined) setLocalVisible(nextVisible)
      onVisibleChange?.(nextVisible)
    }

    return (
      <InputGroup
        endElement={
          <IconButton
            aria-label={isVisible ? 'Hide password' : 'Show password'}
            onClick={() => setVisible(!isVisible)}
            size="xs"
            variant="ghost"
          >
            {isVisible ? <LuEyeOff /> : <LuEye />}
          </IconButton>
        }
      >
        <Input ref={ref} type={isVisible ? 'text' : 'password'} {...inputProps} />
      </InputGroup>
    )
  }
)

export interface PasswordStrengthMeterProps extends StackProps {
  max?: number
  value: number
}

export function PasswordStrengthMeter(props: PasswordStrengthMeterProps) {
  const { max = 4, value, ...rest } = props

  return (
    <Stack direction="row" gap="1" {...rest}>
      {Array.from({ length: max }).map((_, index) => (
        <Box
          bg={index < value ? 'colorPalette.solid' : 'bg.muted'}
          colorPalette={value > 2 ? 'green' : value > 1 ? 'yellow' : 'red'}
          flex="1"
          h="1"
          key={index}
          rounded="full"
        />
      ))}
    </Stack>
  )
}
