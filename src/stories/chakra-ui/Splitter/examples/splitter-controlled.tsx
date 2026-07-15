'use client'

import { Center, Code, HStack, Span, Splitter, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { LuMouse, LuMoveHorizontal } from 'react-icons/lu'

export const SplitterControlled = () => {
  const [sizes, setSizes] = useState([50, 50])

  return (
    <Stack align="start" gap="4">
      <HStack gap={2} textStyle="sm">
        <LuMouse />
        <LuMoveHorizontal />
        <Span>Drag the handle to resize panels</Span>
      </HStack>

      <Splitter.Root
        borderWidth="1px"
        minH="60"
        onResize={(details) => setSizes(details.size)}
        panels={[{ id: 'a' }, { id: 'b' }]}
        size={sizes}
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

      <Code color="fg.muted">
        Panel A: {sizes[0].toFixed(1)}% | Panel B: {sizes[1].toFixed(1)}%
      </Code>
    </Stack>
  )
}
