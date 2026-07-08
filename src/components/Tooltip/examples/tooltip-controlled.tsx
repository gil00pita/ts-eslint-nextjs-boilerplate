'use client'

import { Button } from '@chakra-ui/react'
import { useState } from 'react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    <Tooltip content="Tooltip Content" onOpenChange={(e) => setOpen(e.open)} open={open}>
      <Button size="sm">{open ? 'Hide' : 'Show'} tooltip</Button>
    </Tooltip>
  )
}
