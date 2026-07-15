import { Box, Center, Flex, Menu, Portal, Text } from '@chakra-ui/react'

export const MenuWithHideWhenDetached = () => {
  return (
    <Center minH="sm">
      <Flex bg="bg.subtle" borderWidth="1px" gapX="6" h="full" overflowX="auto" p="4" w="300px">
        {[...Array(6).keys()].map((x) => (
          <Box borderRadius="md" key={x} layerStyle="fill.surface" p="4">
            <Text>Item{x}</Text>
          </Box>
        ))}
        <Box>
          <Menu.Root positioning={{ hideWhenDetached: true }}>
            <Menu.Trigger asChild>
              <Box as="button" bg="green.100" borderRadius="md" p="4">
                Menu
              </Box>
            </Menu.Trigger>
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
        </Box>
      </Flex>
    </Center>
  )
}
