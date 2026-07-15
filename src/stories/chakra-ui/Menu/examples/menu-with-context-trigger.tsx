import { Center, Menu, Portal } from '@chakra-ui/react'

export const MenuWithContextTrigger = () => {
  return (
    <Menu.Root>
      <Menu.ContextTrigger width="full">
        <Center
          borderStyle="dashed"
          borderWidth="2px"
          height="40"
          padding="4"
          rounded="lg"
          userSelect="none"
        >
          Right click here
        </Center>
      </Menu.ContextTrigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
