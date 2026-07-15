'use client'

import { Code, createListCollection, Listbox, Stack } from '@chakra-ui/react'
import { useState } from 'react'

export const ListboxControlled = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <Stack gap="4" maxWidth="320px" width="full">
      <Listbox.Root
        collection={frameworks}
        onValueChange={(details) => setValue(details.value)}
        value={value}
      >
        <Listbox.Label>Select framework</Listbox.Label>
        <Listbox.Content>
          {frameworks.items.map((framework) => (
            <Listbox.Item item={framework} key={framework.value}>
              <Listbox.ItemText>{framework.label}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>

      <Code alignSelf="flex-start">Selected: {JSON.stringify(value, null, 2)}</Code>
    </Stack>
  )
}

const frameworks = createListCollection({
  items: [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ],
})
