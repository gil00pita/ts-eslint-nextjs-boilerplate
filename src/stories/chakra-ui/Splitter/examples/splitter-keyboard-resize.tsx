import { Box, Center, HStack, Span, Splitter } from '@chakra-ui/react'
import { LuKeyboard, LuMoveLeft, LuMoveRight } from 'react-icons/lu'

export const SplitterKeyboardResize = () => {
  return (
    <Box>
      <HStack gap={2} mb={4} textStyle="sm" wrap="wrap">
        <LuKeyboard />
        <Span>Focus the resize handle and use arrow keys</Span>
        <LuMoveLeft />
        <LuMoveRight />
      </HStack>

      <Splitter.Root
        borderWidth="1px"
        keyboardResizeBy={5}
        minH="60"
        panels={[{ id: 'a' }, { id: 'b' }]}
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
