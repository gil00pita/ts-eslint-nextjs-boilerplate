import { Button, Menu, Portal, ScrollArea } from '@chakra-ui/react'
import { useId } from 'react'

export const ScrollAreaWithMenu = () => {
  const contentId = useId()
  return (
    <Menu.Root ids={{ content: contentId }}>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Open Menu with Scroll
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <MenuContent id={contentId} maxH="80" w="64">
            {menuItems.map((item) => (
              <Menu.Item key={item.value} value={item.value}>
                {item.label}
              </Menu.Item>
            ))}
          </MenuContent>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

function MenuContent(props: Menu.ContentProps) {
  const { children, id, ...rest } = props
  return (
    <ScrollArea.Root ids={{ viewport: id }} overflow="visible">
      <ScrollArea.Viewport asChild>
        <Menu.Content {...rest}>
          {children}
          <ScrollArea.Scrollbar bg="transparent">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </Menu.Content>
      </ScrollArea.Viewport>
    </ScrollArea.Root>
  )
}

const menuItems = [
  { label: 'Profile', value: 'profile' },
  { label: 'Settings', value: 'settings' },
  { label: 'Notifications', value: 'notifications' },
  { label: 'Messages', value: 'messages' },
  { label: 'Documents', value: 'documents' },
  { label: 'Files', value: 'files' },
  { label: 'Images', value: 'images' },
  { label: 'Videos', value: 'videos' },
  { label: 'Music', value: 'music' },
  { label: 'Downloads', value: 'downloads' },
  { label: 'Share', value: 'share' },
  { label: 'Copy', value: 'copy' },
  { label: 'Edit', value: 'edit' },
  { label: 'Favorites', value: 'favorites' },
  { label: 'Liked Items', value: 'liked' },
  { label: 'Bookmarks', value: 'bookmarks' },
  { label: 'Flagged Items', value: 'flagged' },
  { label: 'Help & Support', value: 'help' },
  { label: 'Trash', value: 'trash' },
  { label: 'Logout', value: 'logout' },
]
