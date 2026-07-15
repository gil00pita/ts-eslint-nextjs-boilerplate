'use client'

import { Input, Listbox, useFilter, useListCollection } from '@chakra-ui/react'

export const ListboxWithInput = () => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: [
      { label: 'React.js', value: 'react' },
      { label: 'Vue.js', value: 'vue' },
      { label: 'Angular', value: 'angular' },
      { label: 'Svelte', value: 'svelte' },
      { label: 'Next.js', value: 'nextjs' },
      { label: 'Nuxt.js', value: 'nuxtjs' },
      { label: 'Remix', value: 'remix' },
      { label: 'Gatsby', value: 'gatsby' },
      { label: 'Ember.js', value: 'ember' },
      { label: 'Preact', value: 'preact' },
    ],
  })

  return (
    <Listbox.Root collection={collection} maxW="320px">
      <Listbox.Label>Select Framework</Listbox.Label>
      <Listbox.Input
        as={Input}
        onChange={(e) => filter(e.target.value)}
        placeholder="Type to filter frameworks..."
      />
      <Listbox.Content maxH="200px">
        {collection.items.map((framework) => (
          <Listbox.Item item={framework} key={framework.value}>
            <Listbox.ItemText>{framework.label}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        ))}

        <Listbox.Empty>No frameworks found</Listbox.Empty>
      </Listbox.Content>
    </Listbox.Root>
  )
}
