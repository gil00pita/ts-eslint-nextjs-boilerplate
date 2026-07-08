'use client'

import { Avatar as ChakraAvatar } from '@chakra-ui/react'
import * as React from 'react'

export interface AvatarProps extends Omit<
  React.ComponentProps<typeof ChakraAvatar.Root>,
  'children'
> {
  fallback?: React.ReactNode
  name?: string
  src?: string
}

export function Avatar(props: AvatarProps) {
  const { fallback, name, src, ...rest } = props

  return (
    <ChakraAvatar.Root {...rest}>
      <ChakraAvatar.Fallback name={name}>{fallback}</ChakraAvatar.Fallback>
      <ChakraAvatar.Image src={src} />
    </ChakraAvatar.Root>
  )
}
