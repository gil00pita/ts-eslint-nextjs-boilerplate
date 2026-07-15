'use client'

import { Box, Heading, HStack, Text } from '@chakra-ui/react'
import { LuBookOpen, LuEllipsis, LuFolder, LuLayoutDashboard, LuPlus } from 'react-icons/lu'

import { Sidebar } from '@/components/Sidebar'

const projects = ['Design system', 'Customer portal', 'Marketing site']

export const SidebarFloating = () => (
  <Sidebar.Provider>
    <Sidebar.Root collapsible="icon" variant="floating">
      <Sidebar.Header>
        <Text fontWeight="bold" px="2.5" py="2">
          Workspace
        </Text>
      </Sidebar.Header>
      <Sidebar.Content>
        <Sidebar.Group>
          <Sidebar.GroupContent>
            <Sidebar.Menu>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton active tooltip="Overview">
                  <LuLayoutDashboard />
                  <Text as="span" truncate>
                    Overview
                  </Text>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
              <Sidebar.MenuItem>
                <Sidebar.MenuButton tooltip="Documentation">
                  <LuBookOpen />
                  <Text as="span" truncate>
                    Documentation
                  </Text>
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
        <Sidebar.Group>
          <Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
          <Sidebar.GroupAction aria-label="Add project">
            <LuPlus />
          </Sidebar.GroupAction>
          <Sidebar.GroupContent>
            <Sidebar.Menu>
              {projects.map((project) => (
                <Sidebar.MenuItem key={project} role="group">
                  <Sidebar.MenuButton tooltip={project}>
                    <LuFolder />
                    <Text as="span" truncate>
                      {project}
                    </Text>
                  </Sidebar.MenuButton>
                  <Sidebar.MenuAction aria-label={`More options for ${project}`} showOnHover>
                    <LuEllipsis />
                  </Sidebar.MenuAction>
                </Sidebar.MenuItem>
              ))}
            </Sidebar.Menu>
          </Sidebar.GroupContent>
        </Sidebar.Group>
      </Sidebar.Content>
    </Sidebar.Root>
    <Sidebar.Inset m={{ base: '0', lg: '2' }} minH={{ base: '100dvh', lg: 'calc(100dvh - 1rem)' }}>
      <HStack borderBottomWidth="1px" gap="3" h="16" px="6">
        <Sidebar.Trigger icon="chevronLeft" />
        <Heading size="md">Floating sidebar</Heading>
      </HStack>
      <Box p="6">
        <Text color="fg.muted">The panel uses Chakra border, radius and shadow tokens.</Text>
      </Box>
    </Sidebar.Inset>
  </Sidebar.Provider>
)
