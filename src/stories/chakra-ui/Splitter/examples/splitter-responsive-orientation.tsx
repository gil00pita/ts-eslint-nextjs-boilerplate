'use client'

import { Center, Splitter, useBreakpointValue } from '@chakra-ui/react'

export const SplitterResponsiveOrientation = () => {
  const orientation = useBreakpointValue<'horizontal' | 'vertical'>({
    base: 'vertical',
    md: 'horizontal',
  })

  return (
    <Splitter.Root
      borderWidth="1px"
      minH="60"
      orientation={orientation}
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
  )
}
