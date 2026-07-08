'use client'

import type { IconButtonProps, SpanProps } from '@chakra-ui/react'
import type { ThemeProviderProps } from 'next-themes'

import { ClientOnly, IconButton, Skeleton, Span } from '@chakra-ui/react'
import { ThemeProvider, useTheme } from 'next-themes'
import * as React from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'

export type ColorModeProviderProps = ThemeProviderProps

export function ColorModeProvider(props: ColorModeProviderProps) {
  return <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
}

export type ColorMode = 'light' | 'dark'

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

export function useColorMode(): UseColorModeReturn {
  const { forcedTheme, resolvedTheme, setTheme } = useTheme()
  const fallbackTheme =
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
  const colorMode = (forcedTheme || resolvedTheme || fallbackTheme) as ColorMode
  const toggleColorMode = () => {
    setTheme(colorMode === 'dark' ? 'light' : 'dark')
  }
  return {
    colorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === 'dark' ? <LuMoon /> : <LuSun />
}

type ColorModeButtonProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeButton = React.forwardRef<HTMLButtonElement, ColorModeButtonProps>(
  function ColorModeButton(props, ref) {
    const { toggleColorMode } = useColorMode()
    return (
      <ClientOnly fallback={<Skeleton boxSize="9" />}>
        <IconButton
          aria-label="Toggle color mode"
          onClick={toggleColorMode}
          ref={ref}
          size="sm"
          variant="ghost"
          {...props}
          css={{
            _icon: {
              height: '5',
              width: '5',
            },
          }}
        >
          <ColorModeIcon />
        </IconButton>
      </ClientOnly>
    )
  }
)

export const LightMode = React.forwardRef<HTMLSpanElement, SpanProps>(
  function LightMode(props, ref) {
    return (
      <Span
        className="chakra-theme light"
        color="fg"
        colorPalette="gray"
        colorScheme="light"
        display="contents"
        ref={ref}
        {...props}
      />
    )
  }
)

export const DarkMode = React.forwardRef<HTMLSpanElement, SpanProps>(function DarkMode(props, ref) {
  return (
    <Span
      className="chakra-theme dark"
      color="fg"
      colorPalette="gray"
      colorScheme="dark"
      display="contents"
      ref={ref}
      {...props}
    />
  )
})
