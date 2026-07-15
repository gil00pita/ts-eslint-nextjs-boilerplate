'use client'

import { Button, Menu, Portal } from '@chakra-ui/react'
import { useId } from 'react'

import { Tooltip } from '@/ui/tooltip'

export const TooltipWithMenuTrigger = () => {
  const triggerId = useId()
  return (
    <Menu.Root ids={{ trigger: triggerId }}>
      <Tooltip
        content="Tooltip content"
        ids={{ trigger: triggerId }}
        positioning={{ placement: 'top' }}
      >
        <Menu.Trigger asChild>
          <Button size="sm" variant="outline">
            Open
          </Button>
        </Menu.Trigger>
      </Tooltip>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">Open tooltip</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
