'use client'

import { Button, Code, Menu, Portal, Stack, useMenu } from '@chakra-ui/react'

export const MenuWithStore = () => {
  const menu = useMenu()
  return (
    <Stack align="flex-start" gap="4">
      <Code>open: {String(menu.api.open)}</Code>
      <Menu.RootProvider value={menu}>
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
      </Menu.RootProvider>
    </Stack>
  )
}
