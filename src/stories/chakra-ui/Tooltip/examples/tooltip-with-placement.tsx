import { Button } from '@chakra-ui/react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipWithPlacement = () => {
  return (
    <Tooltip content="This is the tooltip content" positioning={{ placement: 'right-end' }}>
      <Button size="sm" variant="outline">
        Hover me
      </Button>
    </Tooltip>
  )
}
