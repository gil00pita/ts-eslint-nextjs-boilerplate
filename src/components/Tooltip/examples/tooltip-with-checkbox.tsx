import { Checkbox } from '@chakra-ui/react'
import { useId } from 'react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipWithCheckbox = () => {
  const id = useId()
  return (
    <Tooltip content="This is the tooltip content" ids={{ trigger: id }}>
      <Checkbox.Root ids={{ root: id }}>
        <Checkbox.HiddenInput />
        <Checkbox.Control />
        <Checkbox.Label>Welcome</Checkbox.Label>
      </Checkbox.Root>
    </Tooltip>
  )
}
