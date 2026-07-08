'use client'

import { Tooltip as ChakraTooltip, Portal } from '@chakra-ui/react'
import * as React from 'react'

type TooltipRootProps = React.ComponentProps<typeof ChakraTooltip.Root>
type TooltipContentProps = React.ComponentProps<typeof ChakraTooltip.Content>

export interface TooltipProps extends TooltipRootProps {
  content: React.ReactNode
  contentProps?: TooltipContentProps
  disabled?: boolean
  portalled?: boolean
  showArrow?: boolean
}

export function Tooltip(props: TooltipProps) {
  const {
    children,
    content,
    contentProps,
    disabled,
    portalled = true,
    showArrow = true,
    ...rootProps
  } = props

  if (disabled) return <>{children}</>

  const positioner = (
    <ChakraTooltip.Positioner>
      <ChakraTooltip.Content {...contentProps}>
        {showArrow && (
          <ChakraTooltip.Arrow>
            <ChakraTooltip.ArrowTip />
          </ChakraTooltip.Arrow>
        )}
        {content}
      </ChakraTooltip.Content>
    </ChakraTooltip.Positioner>
  )

  return (
    <ChakraTooltip.Root {...rootProps}>
      <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
      {portalled ? <Portal>{positioner}</Portal> : positioner}
    </ChakraTooltip.Root>
  )
}
