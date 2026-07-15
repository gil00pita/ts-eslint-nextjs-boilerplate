'use client'

import { Accordion, Span, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'

export const AccordionControlled = () => {
  const [value, setValue] = useState(['second-item'])
  return (
    <Stack gap="4">
      <Text fontWeight="medium">Expanded: {value.join(', ')}</Text>
      <Accordion.Root onValueChange={(e) => setValue(e.value)} value={value}>
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
    </Stack>
  )
}

const items = [
  { text: 'Some value 1...', title: 'First Item', value: 'first-item' },
  { text: 'Some value 2...', title: 'Second Item', value: 'second-item' },
  { text: 'Some value 3...', title: 'Third Item', value: 'third-item' },
]
