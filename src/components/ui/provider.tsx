'use client'

import type { ReactNode } from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import { customBrandThemeSystem } from '@/theme'

import { ColorModeProvider } from './color-mode'

export function Provider(props: { children: ReactNode }) {
  const { children } = props

  return (
    <ColorModeProvider defaultTheme="light">
      <ChakraProvider value={customBrandThemeSystem}>{children}</ChakraProvider>
    </ColorModeProvider>
  )
}
