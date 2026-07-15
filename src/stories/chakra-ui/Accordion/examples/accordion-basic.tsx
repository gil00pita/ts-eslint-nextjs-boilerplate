import { Accordion, Span } from '@chakra-ui/react'

export const AccordionBasic = () => {
  return (
    <Accordion.Root collapsible defaultValue={['b']}>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Accordion.ItemTrigger>
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
  { text: 'Some value 1...', title: 'First Item', value: 'a' },
  { text: 'Some value 2...', title: 'Second Item', value: 'b' },
  { text: 'Some value 3...', title: 'Third Item', value: 'c' },
]
