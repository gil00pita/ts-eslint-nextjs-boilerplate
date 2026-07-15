import { Tabs } from '@chakra-ui/react'
import { LuFolder, LuSquareCheck, LuUser } from 'react-icons/lu'

export const TabsWithManualActivation = () => {
  return (
    <Tabs.Root activationMode="manual" defaultValue="members">
      <Tabs.List>
        <Tabs.Trigger value="members">
          <LuUser />
          Members
        </Tabs.Trigger>
        <Tabs.Trigger disabled value="projects">
          <LuFolder />
          Projects
        </Tabs.Trigger>
        <Tabs.Trigger value="tasks">
          <LuSquareCheck />
          Settings
        </Tabs.Trigger>
      </Tabs.List>
      {/* content */}
    </Tabs.Root>
  )
}
