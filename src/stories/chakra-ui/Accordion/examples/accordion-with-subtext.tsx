import { Accordion, Stack, Text } from '@chakra-ui/react'
import { LoremIpsum } from 'react-lorem-ipsum'

const items = [
  { text: <LoremIpsum p={1} />, title: 'First Item', value: 'a' },
  { text: <LoremIpsum p={1} />, title: 'Second Item', value: 'b' },
  { text: <LoremIpsum p={1} />, title: 'Third Item', value: 'c' },
]

export const AccordionWithSubtext = () => {
  return (
    <Accordion.Root collapsible>
      {items.map((item, index) => (
        <Accordion.Item key={index} value={item.value}>
          <Accordion.ItemTrigger>
            <Stack gap="1">
              <Text>{item.title}</Text>
              <Text color="fg.muted" fontSize="sm">
                Click to expand
              </Text>
            </Stack>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
