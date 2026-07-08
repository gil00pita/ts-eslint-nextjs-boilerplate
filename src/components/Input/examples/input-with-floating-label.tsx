'use client'

import type { InputProps } from '@chakra-ui/react'

import { Box, defineStyle, Field, Input, useControllableState } from '@chakra-ui/react'
import { useState } from 'react'

export const InputWithFloatingLabel = () => {
  return (
    <Field.Root>
      <FloatingLabelInput label="Email" />
      <Field.ErrorText>This field is required</Field.ErrorText>
    </Field.Root>
  )
}

interface FloatingLabelInputProps extends InputProps {
  label: React.ReactNode
  value?: string | undefined
  defaultValue?: string | undefined
  onValueChange?: ((value: string) => void) | undefined
}

const FloatingLabelInput = (props: FloatingLabelInputProps) => {
  const { defaultValue = '', label, onValueChange, value, ...rest } = props

  const [inputState, setInputState] = useControllableState({
    defaultValue,
    onChange: onValueChange,
    value,
  })

  const [focused, setFocused] = useState(false)
  const shouldFloat = inputState.length > 0 || focused

  return (
    <Box pos="relative" w="full">
      <Input
        {...rest}
        data-float={shouldFloat || undefined}
        onBlur={(e) => {
          props.onBlur?.(e)
          setFocused(false)
        }}
        onChange={(e) => {
          props.onChange?.(e)
          setInputState(e.target.value)
        }}
        onFocus={(e) => {
          props.onFocus?.(e)
          setFocused(true)
        }}
        value={inputState}
      />
      <Field.Label css={floatingStyles} data-float={shouldFloat || undefined}>
        {label}
      </Field.Label>
    </Box>
  )
}

const floatingStyles = defineStyle({
  '&[data-float]': {
    color: 'fg',
    insetStart: '2',
    top: '-3',
  },
  bg: 'bg',
  color: 'fg.muted',
  fontWeight: 'normal',
  insetStart: '3',
  pointerEvents: 'none',
  pos: 'absolute',
  px: '0.5',
  top: '2.5',
  transition: 'position',
})
