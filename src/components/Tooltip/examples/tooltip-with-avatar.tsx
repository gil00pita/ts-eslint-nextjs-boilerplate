import { Avatar } from '@chakra-ui/react'
import { useId } from 'react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipWithAvatar = () => {
  const id = useId()
  return (
    <Tooltip content="Segun Adebayo is online" ids={{ trigger: id }}>
      <Avatar.Root ids={{ root: id }}>
        <Avatar.Image src="https://bit.ly/sage-adebayo" />
        <Avatar.Fallback name="Segun Adebayo" />
      </Avatar.Root>
    </Tooltip>
  )
}
