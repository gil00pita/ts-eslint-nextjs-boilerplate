import { Button } from '@chakra-ui/react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipWithOffset = () => {
  return (
    <Tooltip
      content="This is the tooltip content"
      positioning={{ offset: { crossAxis: 4, mainAxis: 4 } }}
    >
      <Button size="sm" variant="outline">
        Hover me
      </Button>
    </Tooltip>
  )
}
