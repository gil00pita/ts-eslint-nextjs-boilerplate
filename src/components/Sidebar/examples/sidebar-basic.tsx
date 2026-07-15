'use client'

import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import { LuCalendar, LuChevronUp, LuHouse, LuInbox, LuSearch, LuSettings } from 'react-icons/lu'

import { Sidebar } from '@/components/Sidebar'

const navigation = [
  { icon: LuHouse, label: 'Home' },
  { badge: '12', icon: LuInbox, label: 'Inbox' },
  { icon: LuCalendar, label: 'Calendar' },
  { icon: LuSearch, label: 'Search' },
  { icon: LuSettings, label: 'Settings' },
] as const

export const SidebarBasic = () => (
  <Sidebar.Provider>
    <Sidebar.Root collapsible="icon">
      <Sidebar.Header>
        <HStack gap="2" minH="9" px="2.5">
          <Box bg="brand.solid" borderRadius="md" boxSize="5" flexShrink="0" />
          <Text fontWeight="semibold" truncate>
            Acme Inc.
          </Text>
        </HStack>
        <Sidebar.Input placeholder="Search navigation" />
      </Sidebar.Header>
      <Sidebar.Separator />
      <Sidebar.Content>
        <Sidebar.Group>
          <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
          <Sidebar.GroupContent>
            <Sidebar.Menu>
              {navigation.map((item, index) => (
                <Sidebar.MenuItem key={item.label}>
                  <Sidebar.MenuButton active={index === 0} tooltip={item.label}>
                    <item.icon />
                    <Text as="span" truncate>
                      {item.label}
                    </Text>
                  </Sidebar.MenuButton>
                  {'badge' in item && <Sidebar.MenuBadge>{item.badge}</Sidebar.MenuBadge>}
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
      </Sidebar.Content>
      <Sidebar.Footer>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <Sidebar.MenuButton size="lg" tooltip="Account">
              <Box bg="bg.emphasized" borderRadius="full" boxSize="7" flexShrink="0" />
              <Box flex="1" minW="0">
                <Text fontSize="sm" fontWeight="medium" truncate>
                  Alex Morgan
                </Text>
                <Text color="fg.muted" fontSize="xs" truncate>
                  alex@example.com
                </Text>
              </Box>
              <LuChevronUp />
            </Sidebar.MenuButton>
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.Footer>
      <Sidebar.Rail />
    </Sidebar.Root>

    <Sidebar.Inset>
      <HStack borderBottomWidth="1px" gap="3" h="16" px="6">
        <Sidebar.Trigger />
        <Heading size="md">Dashboard</Heading>
      </HStack>
      <Box p="6">
        <Text color="fg.muted">Use the trigger or press Ctrl/Cmd+B to collapse the sidebar.</Text>
      </Box>
    </Sidebar.Inset>
  </Sidebar.Provider>
)
