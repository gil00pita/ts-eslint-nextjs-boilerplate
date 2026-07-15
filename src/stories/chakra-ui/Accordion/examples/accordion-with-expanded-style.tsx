import { Accordion, Span } from '@chakra-ui/react'

export const AccordionWithExpandedStyle = () => {
  return (
    <Accordion.Root collapsible defaultValue={['b']}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Accordion.ItemTrigger _open={{ bg: 'gray.subtle' }} px="3">
            <Span flex="1">{item.title}</Span>
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const items = [
  {
    text: 'Click the accordion button to see a different style when expanded.',
    title: 'First Item',
    value: 'a',
  },
  {
    text: 'The trigger background changes to teal with white text when expanded.',
    title: 'Second Item',
    value: 'b',
  },
  {
    text: 'You can use any style props with the _open pseudo selector.',
    title: 'Third Item',
    value: 'c',
  },
]
