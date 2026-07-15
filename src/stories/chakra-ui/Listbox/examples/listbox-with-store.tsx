'use client'

import { Code, createListCollection, Listbox, Stack, useListbox } from '@chakra-ui/react'

export const ListboxWithStore = () => {
  const listbox = useListbox({ collection: frameworks })

  return (
    <Stack gap="4" maxWidth="320px" width="full">
      <Listbox.RootProvider value={listbox}>
        <Listbox.Label>Select framework</Listbox.Label>
        <Listbox.Content>
          {frameworks.items.map((framework) => (
            <Listbox.Item item={framework} key={framework.value}>
              <Listbox.ItemText>{framework.label}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.RootProvider>

      <Code alignSelf="flex-start">Selected: {JSON.stringify(listbox.value, null, 2)}</Code>
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
