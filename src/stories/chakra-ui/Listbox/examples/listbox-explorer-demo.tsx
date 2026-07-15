'use client'

import { Box, Input, Listbox, useFilter, useListCollection } from '@chakra-ui/react'
import { LuAtom, LuGlobe, LuPalette, LuZap } from 'react-icons/lu'

export const ListboxExplorerDemo = () => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.category,
    initialItems,
  })

  return (
    <Listbox.Root collection={collection} defaultValue={[collection.items[0].value]} maxW="320px">
      <Listbox.Label>Select item</Listbox.Label>

      <Listbox.Input
        as={Input}
        onChange={(e) => filter(e.target.value)}
        placeholder="Type to filter..."
      />

      <Listbox.Content divideY="1px" maxH="240px">
        {collection.group().map(([category, items]) => (
          <Listbox.ItemGroup key={category}>
            <Listbox.ItemGroupLabel>{category}</Listbox.ItemGroupLabel>
            {items.map((item) => (
              <Listbox.Item item={item} key={item.value}>
                <Box alignItems="center" display="flex" flex="1" gap="3">
                  {item.icon && (
                    <Box color="fg.muted" flexShrink="0">
                      {item.icon}
                    </Box>
                  )}
                  <Listbox.ItemText>{item.label}</Listbox.ItemText>
                </Box>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            ))}
          </Listbox.ItemGroup>
        ))}
        <Listbox.Empty>No results found</Listbox.Empty>
      </Listbox.Content>
    </Listbox.Root>
  )
}

const initialItems = [
  {
    category: 'JavaScript',
    icon: <LuAtom size={16} />,
    label: 'React.js',
    value: 'react',
  },
  {
    category: 'JavaScript',
    icon: <LuPalette size={16} />,
    label: 'Vue.js',
    value: 'vue',
  },
  {
    category: 'JavaScript',
    icon: <LuGlobe size={16} />,
    label: 'Angular',
    value: 'angular',
  },
  {
    category: 'JavaScript',
    icon: <LuZap size={16} />,
    label: 'Svelte',
    value: 'svelte',
  },
  { category: 'Anime', label: 'Naruto', value: 'naruto' },
  { category: 'Anime', label: 'One Piece', value: 'one-piece' },
  { category: 'Movies', label: 'The Godfather', value: 'godfather' },
  { category: 'Movies', label: 'The Dark Knight', value: 'dark-knight' },
]
