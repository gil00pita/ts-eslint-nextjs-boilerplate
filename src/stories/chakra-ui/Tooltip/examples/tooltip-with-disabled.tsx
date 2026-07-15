import { Button } from '@chakra-ui/react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipWithDisabled = () => {
  return (
    <Tooltip content="This is the tooltip content" disabled>
      <Button size="sm" variant="outline">
        Hover me
      </Button>
    </Tooltip>
  )
}
