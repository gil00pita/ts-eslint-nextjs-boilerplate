import { Link, Tabs } from '@chakra-ui/react'

export const TabsWithLinks = () => {
  return (
    <Tabs.Root defaultValue="members">
      <Tabs.List>
        <Tabs.Trigger asChild value="members">
          <Link href="#members" unstyled>
            Members
          </Link>
        </Tabs.Trigger>
        <Tabs.Trigger asChild value="projects">
          <Link href="#projects" unstyled>
            Projects
          </Link>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="members">Manage your team members</Tabs.Content>
      <Tabs.Content value="projects">Manage your projects</Tabs.Content>
    </Tabs.Root>
  )
}
