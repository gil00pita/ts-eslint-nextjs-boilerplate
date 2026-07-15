'use client'

import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { LuCircleHelp, LuHouse, LuSettings } from 'react-icons/lu'

import { Sidebar } from '@/components/Sidebar'

const links = [
  { icon: LuHouse, label: 'Home' },
  { icon: LuSettings, label: 'Settings' },
  { icon: LuCircleHelp, label: 'Help' },
] as const

export const SidebarControlled = () => {
  const [open, setOpen] = useState(true)

  return (
    <Sidebar.Provider onOpenChange={setOpen} open={open}>
      <Sidebar.Root collapsible="offcanvas">
        <Sidebar.Header>
          <Text fontWeight="bold" px="2.5" py="2">
            Controlled state
          </Text>
        </Sidebar.Header>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                {links.map((item) => (
                  <Sidebar.MenuItem key={item.label}>
                    <Sidebar.MenuButton>
                      <item.icon />
                      <Text as="span">{item.label}</Text>
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                ))}
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
      </Sidebar.Root>
      <Sidebar.Inset>
        <HStack borderBottomWidth="1px" gap="3" h="16" px="6">
          <Sidebar.Trigger />
          <Heading size="md">Controlled sidebar</Heading>
        </HStack>
        <Box p="6">
          <Button onClick={() => setOpen((current) => !current)} variant="outline">
            {open ? 'Close' : 'Open'} sidebar
          </Button>
        </Box>
      </Sidebar.Inset>
    </Sidebar.Provider>
  )
}
