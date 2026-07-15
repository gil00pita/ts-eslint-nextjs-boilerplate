'use client'

import { Center, Splitter } from '@chakra-ui/react'

export const SplitterResetOnDoubleClick = () => {
  return (
    <Splitter.Root
      borderWidth="1px"
      defaultSize={[50, 50]}
      minH="60"
      panels={[{ id: 'a' }, { id: 'b' }]}
    >
      <Splitter.Panel id="a">
        <Center boxSize="full" textStyle="2xl">
          A
        </Center>
      </Splitter.Panel>

      <Splitter.Context>
        {(context) => (
          <Splitter.ResizeTrigger
            id="a:b"
            onDoubleClick={() => {
              context.resetSizes()
            }}
          />
        )}
      </Splitter.Context>

      <Splitter.Panel id="b">
        <Center boxSize="full" textStyle="2xl">
          B
        </Center>
      </Splitter.Panel>
    </Splitter.Root>
  )
}
