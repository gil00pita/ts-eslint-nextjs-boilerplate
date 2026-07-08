'use client'

import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'

import { Tooltip } from '@/ui/tooltip'

function DemoTooltip() {
  const [open, setOpen] = useState(false)
  return (
    <Tooltip
      content="Tooltip content"
      onOpenChange={({ open }) => setOpen(open)}
      open={open}
      positioning={{ placement: 'left' }}
    >
      <Box layerStyle="fill.surface" px="2" py="1" textStyle="sm">
        Hover me
      </Box>
    </Tooltip>
  )
}

export const TooltipControlledMultiple = () => {
  return (
    <Box spaceY="2">
      {[...Array.from({ length: 10 })].map((_, index) => (
        <Flex key={index}>
          <DemoTooltip />
        </Flex>
      ))}
    </Box>
  )
}
