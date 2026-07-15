import { Button, HStack } from '@chakra-ui/react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipMultiple = () => {
  return (
    <HStack>
      <Tooltip content="Tooltip Content - 1">
        <Button size="sm" variant="outline">
          Button 1
        </Button>
      </Tooltip>
      <Tooltip content="Tooltip Content - 2">
        <Button size="sm" variant="outline">
          Button 2
        </Button>
      </Tooltip>
    </HStack>
  )
}
