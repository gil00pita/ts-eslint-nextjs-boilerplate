'use client'

import { Stack } from '@chakra-ui/react'
import { type Options, passwordStrength } from 'check-password-strength'
import { useMemo, useState } from 'react'

import { PasswordInput, PasswordStrengthMeter } from '@/ui/password-input'

const strengthOptions: Options<string> = [
  { id: 1, minDiversity: 0, minLength: 0, value: 'weak' },
  { id: 2, minDiversity: 2, minLength: 6, value: 'medium' },
  { id: 3, minDiversity: 3, minLength: 8, value: 'strong' },
  { id: 4, minDiversity: 4, minLength: 10, value: 'very-strong' },
]

export const PasswordInputWithStrengthIndicator = () => {
  const [password, setPassword] = useState('')

  const strength = useMemo(() => {
    if (!password) return 0
    const result = passwordStrength(password, strengthOptions)
    return result.id
  }, [password])

  return (
    <Stack gap="3" maxW="300px">
      <PasswordInput
        onChange={(e) => setPassword(e.currentTarget.value)}
        placeholder="Enter your password"
        value={password}
      />
      <PasswordStrengthMeter value={strength} />
    </Stack>
  )
}
