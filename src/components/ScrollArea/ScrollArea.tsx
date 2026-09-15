'use client'

import type { ComponentProps } from 'react'

import { ScrollArea as ChakraScrollArea } from '@chakra-ui/react'

export interface ScrollAreaProps extends ComponentProps<typeof ChakraScrollArea.Root> {
  contentProps?: ComponentProps<typeof ChakraScrollArea.Content>
  orientation?: 'vertical' | 'horizontal' | 'both'
  viewportProps?: ComponentProps<typeof ChakraScrollArea.Viewport>
}

export function ScrollArea({
  children,
  contentProps,
  orientation = 'vertical',
  viewportProps,
  ...props
}: ScrollAreaProps) {
  return (
    <ChakraScrollArea.Root {...props}>
      <ChakraScrollArea.Viewport {...viewportProps}>
        <ChakraScrollArea.Content {...contentProps}>{children}</ChakraScrollArea.Content>
      </ChakraScrollArea.Viewport>
      {orientation !== 'horizontal' && (
        <ChakraScrollArea.Scrollbar orientation="vertical">
          <ChakraScrollArea.Thumb />
        </ChakraScrollArea.Scrollbar>
      )}
      {orientation !== 'vertical' && (
        <ChakraScrollArea.Scrollbar orientation="horizontal">
          <ChakraScrollArea.Thumb />
        </ChakraScrollArea.Scrollbar>
      )}
      <ChakraScrollArea.Corner />
    </ChakraScrollArea.Root>
  )
}
