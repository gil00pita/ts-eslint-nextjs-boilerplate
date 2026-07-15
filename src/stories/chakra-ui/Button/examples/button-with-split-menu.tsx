import { Button, Group, IconButton, Menu, Portal } from '@chakra-ui/react'
import { LuChevronDown } from 'react-icons/lu'

const menuItems = [
  { label: 'Save as Draft', value: 'draft' },
  { label: 'Save & Publish', value: 'publish' },
  { label: 'Save & Schedule', value: 'schedule' },
]

export const ButtonWithSplitMenu = () => {
  return (
    <Menu.Root positioning={{ placement: 'bottom-end' }}>
      <Group attached>
        <Button size="sm" variant="outline">
          Save
        </Button>
        <Menu.Trigger asChild>
          <IconButton size="sm" variant="outline">
            <LuChevronDown />
          </IconButton>
        </Menu.Trigger>
      </Group>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
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
