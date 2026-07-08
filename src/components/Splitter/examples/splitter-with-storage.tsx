'use client'

import { Badge, Button, Center, HStack, Span, Splitter, Stack } from '@chakra-ui/react'
import { LuBox, LuMouse, LuMoveHorizontal, LuTrash2 } from 'react-icons/lu'
import { useLocalStorage } from 'react-use'

export const SplitterWithStorage = () => {
  const [sizes, setSizes] = useLocalStorage('splitter-sizes', [70, 50])
  const formattedSizes = sizes?.map((size) => size.toFixed(1)).join(', ')
  const hasSavedState = sizes && sizes.length > 0

  const clearStorage = () => {
    setSizes(undefined)
  }

  return (
    <Stack align="start" gap="4">
      <HStack alignSelf="stretch" justify="space-between" textStyle="sm">
        <HStack>
          <LuMouse />
          <LuMoveHorizontal />
          <Span>Drag to resize panels</Span>
        </HStack>
        {hasSavedState && (
          <Button onClick={clearStorage} size="xs" variant="ghost">
            <LuTrash2 /> Clear Storage
          </Button>
        )}
      </HStack>

      <Splitter.Root
        borderWidth="1px"
        defaultSize={sizes}
        minH="60"
        onResizeEnd={(e) => setSizes(e.size)}
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

      <Badge>
        <LuBox /> LocalStorage {hasSavedState ? `[${formattedSizes}]` : '[Not saved]'}
      </Badge>
    </Stack>
  )
}
