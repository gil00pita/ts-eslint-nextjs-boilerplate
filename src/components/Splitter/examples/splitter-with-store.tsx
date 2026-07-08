'use client'

import { Center, Code, Splitter, Stack, useSplitter } from '@chakra-ui/react'

export const SplitterWithStore = () => {
  const splitter = useSplitter({
    defaultSize: [50, 50],
    panels: [{ id: 'a' }, { id: 'b', minSize: 20 }],
  })

  const sizes = splitter
    .getSizes()
    .map((size) => size.toFixed(1))
    .join('%, ')

  return (
    <Stack align="start" gap="4">
      <Splitter.RootProvider borderWidth="1px" minH="60" value={splitter}>
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
      </Splitter.RootProvider>

      <Code>Size: {JSON.stringify(sizes, null, 2)}</Code>
    </Stack>
  )
}
