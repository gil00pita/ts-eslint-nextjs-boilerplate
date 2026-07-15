'use client'

import { Button, Code, Menu, Portal, Stack } from '@chakra-ui/react'
import { useState } from 'react'

export const MenuControlled = () => {
  const [open, setOpen] = useState(false)
  return (
    <Stack align="flex-start" gap="4">
      <Code>open: {String(open)}</Code>
      <Menu.Root onOpenChange={(e) => setOpen(e.open)} open={open}>
        <Menu.Trigger asChild>
          <Button size="sm" variant="outline">
            Open
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="new-txt">New Text File</Menu.Item>
              <Menu.Item value="new-file">New File...</Menu.Item>
              <Menu.Item value="new-win">New Window</Menu.Item>
              <Menu.Item value="open-file">Open File...</Menu.Item>
              <Menu.Item value="export">Export</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </Stack>
  )
}
