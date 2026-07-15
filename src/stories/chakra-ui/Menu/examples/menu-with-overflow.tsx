import { Button, Menu, Portal } from '@chakra-ui/react'

export const MenuWithOverflow = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Open Menu
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content maxH="200px" minW="10rem">
            {menuItems.map((item) => (
              <Menu.Item key={item.value} value={item.value}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

const menuItems = [
  { label: 'New File', value: 'new-file' },
  { label: 'New Folder', value: 'new-folder' },
  { label: 'Open...', value: 'open' },
  { label: 'Open Recent', value: 'open-recent' },
  { label: 'Save', value: 'save' },
  { label: 'Save As...', value: 'save-as' },
  { label: 'Save All', value: 'save-all' },
  { label: 'Export', value: 'export' },
  { label: 'Import', value: 'import' },
  { label: 'Print', value: 'print' },
  { label: 'Share', value: 'share' },
  { label: 'Duplicate', value: 'duplicate' },
  { label: 'Rename', value: 'rename' },
  { label: 'Move To...', value: 'move' },
  { label: 'Copy To...', value: 'copy' },
  { label: 'Delete', value: 'delete' },
  { label: 'Find', value: 'find' },
  { label: 'Replace', value: 'replace' },
  { label: 'Preferences', value: 'preferences' },
  { label: 'Settings', value: 'settings' },
  { label: 'Help', value: 'help' },
  { label: 'About', value: 'about' },
  { label: 'Quit', value: 'quit' },
]
