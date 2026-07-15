import { Switch } from '@chakra-ui/react'
import { useId } from 'react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipWithSwitch = () => {
  const id = useId()
  return (
    <Tooltip content="This is the tooltip content" ids={{ trigger: id }}>
      <Switch.Root ids={{ root: id }}>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Toggle</Switch.Label>
      </Switch.Root>
    </Tooltip>
  )
}
