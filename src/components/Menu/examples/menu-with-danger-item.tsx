import { Button, Menu, Portal } from '@chakra-ui/react'

export const MenuWithDangerItem = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Open Menu
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="rename">Rename</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
            <Menu.Item
              _hover={{ bg: 'bg.error', color: 'fg.error' }}
              color="fg.error"
              value="delete"
            >
              Delete...
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
