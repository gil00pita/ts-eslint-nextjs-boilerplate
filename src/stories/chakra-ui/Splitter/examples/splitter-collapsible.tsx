import { Box, Center, HStack, Splitter } from '@chakra-ui/react'
import { LuMouse, LuMoveHorizontal } from 'react-icons/lu'

export const SplitterCollapsible = () => {
  return (
    <Box>
      <HStack mb={4} textStyle="sm">
        <LuMouse />
        <LuMoveHorizontal />
        Drag the resizer to collapse or expand Panel A
      </HStack>

      <Splitter.Root
        borderWidth="1px"
        defaultSize={[40, 60]}
        minH="60"
        panels={[
          { collapsedSize: 5, collapsible: true, id: 'a', minSize: 25 },
          { id: 'b', minSize: 50 },
        ]}
      >
        <Splitter.Panel id="a">
          <Center boxSize="full" textStyle="2xl">
            A
          </Center>
        </Splitter.Panel>

        <Splitter.ResizeTrigger id="a:b" />

        <Splitter.Panel id="b">
          <Center boxSize="full" textStyle="2xl">
            B
          </Center>
        </Splitter.Panel>
      </Splitter.Root>
    </Box>
  )
}
