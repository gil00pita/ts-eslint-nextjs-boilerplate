import { ScrollArea } from '@chakra-ui/react'
import LoremIpsum from 'react-lorem-ipsum'

export const ScrollAreaBothDirections = () => (
  <ScrollArea.Root height="12rem" p="2" size="xs" width="lg">
    <ScrollArea.Viewport>
      <ScrollArea.Content spaceY="4" textStyle="sm" w="40rem">
        <LoremIpsum p={3} />
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="horizontal" />
    <ScrollArea.Scrollbar orientation="vertical" />
    <ScrollArea.Corner bg="bg" />
  </ScrollArea.Root>
)
