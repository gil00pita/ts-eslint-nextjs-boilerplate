'use client'

import { Combobox, Portal, useFilter, useListCollection } from '@chakra-ui/react'
import { LuExternalLink } from 'react-icons/lu'

export const ComboboxWithLinks = () => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: frameworks,
  })

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      selectionBehavior="clear"
      width="320px"
    >
      <Combobox.Label>Select framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Type to search" />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item asChild item={item} key={item.value}>
                <a href={item.docs}>
                  {item.label} <LuExternalLink size={10} />
                </a>
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

const frameworks = [
  { docs: 'https://react.dev', label: 'React', value: 'react' },
  { docs: 'https://solidjs.com', label: 'Solid', value: 'solid' },
  { docs: 'https://vuejs.org', label: 'Vue', value: 'vue' },
  { docs: 'https://angular.io', label: 'Angular', value: 'angular' },
  { docs: 'https://svelte.dev', label: 'Svelte', value: 'svelte' },
  { docs: 'https://preactjs.com', label: 'Preact', value: 'preact' },
  { docs: 'https://qwik.builder.io', label: 'Qwik', value: 'qwik' },
  { docs: 'https://lit.dev', label: 'Lit', value: 'lit' },
  { docs: 'https://alpinejs.dev', label: 'Alpine.js', value: 'alpinejs' },
  { docs: 'https://emberjs.com', label: 'Ember', value: 'ember' },
  { docs: 'https://nextjs.org', label: 'Next.js', value: 'nextjs' },
]
