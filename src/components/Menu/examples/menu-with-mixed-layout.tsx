import { Box, Button, Group, Menu, Portal } from '@chakra-ui/react'
import {
  LuClipboard,
  LuCopy,
  LuFileSearch,
  LuMessageSquare,
  LuScissors,
  LuShare,
} from 'react-icons/lu'

const horizontalMenuItems = [
  { icon: <LuScissors />, label: 'Cut', value: 'cut' },
  { icon: <LuCopy />, label: 'Copy', value: 'copy' },
  { icon: <LuClipboard />, label: 'Paste', value: 'paste' },
]

const verticalMenuItems = [
  { icon: <LuFileSearch />, label: 'Look Up', value: 'look-up' },
  { icon: <LuMessageSquare />, label: 'Translate', value: 'translate' },
  { icon: <LuShare />, label: 'Share', value: 'share' },
]

export const MenuWithMixedLayout = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Open
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Group gap="0" grow>
              {horizontalMenuItems.map((item) => (
                <Menu.Item
                  flexDirection="column"
                  gap="1"
                  justifyContent="center"
                  key={item.value}
                  value={item.value}
                  width="14"
                >
                  {item.icon}
                  {item.label}
                </Menu.Item>
              ))}
            </Group>
            {verticalMenuItems.map((item) => (
              <Menu.Item key={item.value} value={item.value}>
                <Box flex="1">{item.label}</Box>
                {item.icon}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
