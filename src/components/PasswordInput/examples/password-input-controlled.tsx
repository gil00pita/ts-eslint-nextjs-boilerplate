'use client'

import { useState } from 'react'

import { PasswordInput } from '@/ui/password-input'

export const PasswordInputControlled = () => {
  const [value, setValue] = useState('')
  return <PasswordInput onChange={(e) => setValue(e.target.value)} value={value} />
}
