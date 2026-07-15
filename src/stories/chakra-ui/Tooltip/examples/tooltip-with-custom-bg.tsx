import { Button } from '@chakra-ui/react'
import { FaBell } from 'react-icons/fa'

import { Tooltip } from '@/ui/tooltip'

export const TooltipWithCustomBg = () => (
  <Tooltip
    content="This is the tooltip content"
    contentProps={{ css: { '--tooltip-bg': 'tomato' } }}
    showArrow
  >
    <Button size="sm" variant="outline">
      <FaBell /> 3
    </Button>
  </Tooltip>
)
