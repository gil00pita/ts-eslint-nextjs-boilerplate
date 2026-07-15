import { Button } from '@chakra-ui/react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipWithArrow = () => {
  return (
    <Tooltip content="This is the tooltip content" showArrow>
      <Button size="sm" variant="outline">
        Hover me
      </Button>
    </Tooltip>
  )
}
