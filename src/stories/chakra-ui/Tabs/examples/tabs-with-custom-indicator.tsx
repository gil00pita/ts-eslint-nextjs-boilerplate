import { Tabs } from '@chakra-ui/react'

export const TabsWithCustomIndicator = () => {
  return (
    <Tabs.Root
      css={{
        '--tabs-indicator-bg': 'colors.gray.subtle',
        '--tabs-indicator-shadow': 'shadows.xs',
        '--tabs-trigger-radius': 'radii.full',
      }}
      defaultValue="members"
      variant="plain"
    >
      <Tabs.List>
        <Tabs.Trigger value="members">Members</Tabs.Trigger>
        <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="members">Manage your team members</Tabs.Content>
      <Tabs.Content value="projects">Manage your projects</Tabs.Content>
      <Tabs.Content value="settings">Manage your settings</Tabs.Content>
    </Tabs.Root>
  )
}
