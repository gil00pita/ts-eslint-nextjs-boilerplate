import type { ReactNode } from 'react'

import { Badge } from '@chakra-ui/react'

export type StatusTone = 'brand' | 'danger' | 'info' | 'neutral' | 'success' | 'warning'

const toneColorPalette: Record<StatusTone, string> = {
  brand: 'brand',
  danger: 'red',
  info: 'blue',
  neutral: 'gray',
  success: 'green',
  warning: 'orange',
}

interface StatusBadgeProps {
  children: ReactNode
  tone?: StatusTone
}

export const StatusBadge = ({ children, tone = 'neutral' }: StatusBadgeProps) => (
  <Badge colorPalette={toneColorPalette[tone]} size="sm" variant="subtle">
    {children}
  </Badge>
)
