'use client'

import { Tag as ChakraTag } from '@chakra-ui/react'
import * as React from 'react'

export interface TagProps extends React.ComponentProps<typeof ChakraTag.Root> {
  children?: React.ReactNode
}

export function Tag(props: TagProps) {
  const { children, ...rest } = props

  return (
    <ChakraTag.Root {...rest}>
      <ChakraTag.Label>{children}</ChakraTag.Label>
    </ChakraTag.Root>
  )
}
