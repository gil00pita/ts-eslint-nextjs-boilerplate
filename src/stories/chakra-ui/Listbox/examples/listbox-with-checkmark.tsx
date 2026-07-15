'use client'

import { Checkmark, createListCollection, Listbox, useListboxItemContext } from '@chakra-ui/react'

const ListboxItemCheckmark = () => {
  const itemState = useListboxItemContext()
  return <Checkmark checked={itemState.selected} disabled={itemState.disabled} filled size="sm" />
}

export const ListboxWithCheckmark = () => {
  return (
    <Listbox.Root collection={frameworks} maxW="320px" selectionMode="multiple">
      <Listbox.Label>Select frameworks (with checkmarks)</Listbox.Label>
      <Listbox.Content>
        {frameworks.items.map((framework) => (
          <Listbox.Item item={framework} key={framework.value}>
            <ListboxItemCheckmark />
            <Listbox.ItemText>{framework.label}</Listbox.ItemText>
          </Listbox.Item>
        ))}
      </Listbox.Content>
    </Listbox.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Next.js', value: 'nextjs' },
    { label: 'Nuxt.js', value: 'nuxtjs' },
  ],
})
