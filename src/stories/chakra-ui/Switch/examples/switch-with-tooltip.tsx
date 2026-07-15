import { Switch } from '@chakra-ui/react'
import { useId } from 'react'

import { Tooltip } from '@/ui/tooltip'

export const SwitchWithTooltip = () => {
  const id = useId()
  return (
    <Tooltip content="This is a tooltip" ids={{ trigger: id }}>
      <Switch.Root ids={{ root: id }}>
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>Switch with tooltip</Switch.Label>
      </Switch.Root>
    </Tooltip>
  )
}
