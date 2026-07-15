import { Center, Splitter } from '@chakra-ui/react'

export const SplitterNested = () => {
  return (
    <Splitter.Root borderWidth="1px" panels={[{ id: 'a' }, { id: 'b' }]}>
      <Splitter.Panel id="a">
        <Center boxSize="full" textStyle="2xl">
          A
        </Center>
      </Splitter.Panel>
      <Splitter.ResizeTrigger aria-label="Resize" id="a:b" />

      <Splitter.Panel id="b">
        <Splitter.Root minH="80" orientation="vertical" panels={[{ id: 'b1' }, { id: 'b2' }]}>
          <Splitter.Panel id="b1">
            <Center boxSize="full" textStyle="2xl">
              B1
            </Center>
          </Splitter.Panel>

          <Splitter.ResizeTrigger aria-label="Resize nested panels" id="b1:b2" />

          <Splitter.Panel id="b2">
            <Center boxSize="full" textStyle="2xl">
              B2
            </Center>
          </Splitter.Panel>
        </Splitter.Root>
      </Splitter.Panel>
    </Splitter.Root>
  )
}
