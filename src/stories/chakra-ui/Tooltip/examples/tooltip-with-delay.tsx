import { Button } from '@chakra-ui/react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipWithDelay = () => {
  return (
    <Tooltip closeDelay={100} content="This is the tooltip content" openDelay={500}>
      <Button size="sm" variant="outline">
        Delay (open: 500ms, close: 100ms)
      </Button>
    </Tooltip>
  )
}
