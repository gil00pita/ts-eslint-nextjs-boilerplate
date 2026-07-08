import { AbsoluteCenter, Accordion, Box, Button, Span } from '@chakra-ui/react'
import LoremIpsum from 'react-lorem-ipsum'

export const AccordionWithActions = () => {
  return (
    <Accordion.Root collapsible defaultValue={['b']} spaceY="4" variant="plain">
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Box position="relative">
            <Accordion.ItemTrigger>
              <Span flex="1">{item.title}</Span>
              <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <AbsoluteCenter axis="vertical" insetEnd="0">
              <Button colorPalette="blue" variant="subtle">
                Action
              </Button>
            </AbsoluteCenter>
          </Box>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const items = [
  { text: <LoremIpsum />, title: 'First Item', value: 'a' },
  { text: <LoremIpsum />, title: 'Second Item', value: 'b' },
  { text: <LoremIpsum />, title: 'Third Item', value: 'c' },
]
