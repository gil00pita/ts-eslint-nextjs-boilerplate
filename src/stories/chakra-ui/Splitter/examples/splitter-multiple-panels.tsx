import { Center, Splitter } from '@chakra-ui/react'

export const SplitterMultiplePanels = () => {
  return (
    <Splitter.Root borderWidth="1px" minH="60" panels={[{ id: 'a' }, { id: 'b' }, { id: 'c' }]}>
      <Splitter.Panel id="a">
        <Center boxSize="full" textStyle="2xl">
          A
        </Center>
      </Splitter.Panel>
      <Splitter.ResizeTrigger aria-label="Resize" id="a:b" />
      <Splitter.Panel id="b">
        <Center boxSize="full" textStyle="2xl">
          B
        </Center>
      </Splitter.Panel>
      <Splitter.ResizeTrigger aria-label="Resize" id="b:c" />
      <Splitter.Panel id="c">
        <Center boxSize="full" textStyle="2xl">
          C
        </Center>
      </Splitter.Panel>
    </Splitter.Root>
  )
}
