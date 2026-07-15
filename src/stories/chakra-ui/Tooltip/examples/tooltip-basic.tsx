import { Button } from '@chakra-ui/react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipBasic = () => {
  return (
    <Tooltip content="This is the tooltip content">
      <Button size="sm" variant="outline">
        Hover me
      </Button>
    </Tooltip>
  )
}
