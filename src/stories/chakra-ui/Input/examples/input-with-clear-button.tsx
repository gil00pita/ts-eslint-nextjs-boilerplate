'use client'

import { CloseButton, Input, InputGroup } from '@chakra-ui/react'
import { useRef, useState } from 'react'

export const InputWithClearButton = () => {
  const [value, setValue] = useState('Initial value')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const endElement = value ? (
    <CloseButton
      me="-2"
      onClick={() => {
        setValue('')
        inputRef.current?.focus()
      }}
      size="xs"
    />
  ) : undefined

  return (
    <InputGroup endElement={endElement}>
      <Input
        onChange={(e) => {
          setValue(e.currentTarget.value)
        }}
        placeholder="Email"
        ref={inputRef}
        value={value}
      />
    </InputGroup>
  )
}
