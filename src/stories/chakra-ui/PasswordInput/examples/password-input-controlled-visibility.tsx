'use client'

import { Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

import { PasswordInput } from '@/ui/password-input'

export const PasswordInputControlledVisibility = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Stack>
      <PasswordInput defaultValue="secret" onVisibleChange={setVisible} visible={visible} />
      <Text>Password is {visible ? 'visible' : 'hidden'}</Text>
    </Stack>
  )
}
