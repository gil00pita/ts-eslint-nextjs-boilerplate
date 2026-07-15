'use client'

import { Center, Code, HStack, Span, Splitter, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { LuMouse, LuMoveHorizontal } from 'react-icons/lu'

export const SplitterMinMaxConstraints = () => {
  const [sizes, setSizes] = useState([30, 70])

  return (
    <Stack align="start" gap="4">
      <HStack gap={2} textStyle="sm">
        <LuMouse />
        <LuMoveHorizontal />
        <Span>Drag to resize - Panel A: 20-60%, Panel B: min 40%</Span>
      </HStack>

      <Splitter.Root
        borderWidth="1px"
        defaultSize={[30, 70]}
        minH="60"
        onResize={(details) => setSizes(details.size)}
        panels={[
          { id: 'a', maxSize: 60, minSize: 20 },
          { id: 'b', minSize: 40 },
        ]}
        size={sizes}
      >
        <Splitter.Panel id="a">
          <Stack align="center" boxSize="full" gap="2" justify="center">
            <Center textStyle="2xl">A</Center>
            <Code color="fg.muted" size="sm">
              {sizes[0].toFixed(1)}% (min: 20%, max: 60%)
            </Code>
          </Stack>
        </Splitter.Panel>

        <Splitter.ResizeTrigger id="a:b" />

        <Splitter.Panel id="b">
          <Stack align="center" boxSize="full" gap="2" justify="center">
            <Center textStyle="2xl">B</Center>
            <Code color="fg.muted" size="sm">
              {sizes[1].toFixed(1)}% (min: 40%)
            </Code>
          </Stack>
        </Splitter.Panel>
      </Splitter.Root>
    </Stack>
  )
}
