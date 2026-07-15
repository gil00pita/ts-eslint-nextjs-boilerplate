'use client'

import { createListCollection, Listbox } from '@chakra-ui/react'

export const ListboxDisabledItem = () => {
  return (
    <Listbox.Root collection={frameworks} width="320px">
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
  )
}

const frameworks = createListCollection({
  items: [
    { label: 'React.js', value: 'react' },
    { disabled: true, label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { disabled: true, label: 'Svelte', value: 'svelte' },
    { label: 'Next.js', value: 'nextjs' },
  ],
})
