'use client'

import { Combobox, Stack, useFilter, useListCollection } from '@chakra-ui/react'

export const ComboboxExplorerDemo = () => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: frameworks,
  })

  return (
    <Stack maxW="320px">
      <Combobox.Root collection={collection} onInputValueChange={(e) => filter(e.inputValue)} open>
        <Combobox.Label fontWeight="medium" mb="2">
          Select framework
        </Combobox.Label>

        <Combobox.Control>
          <Combobox.Input placeholder="Type to search" />
          <Combobox.IndicatorGroup>
            <Combobox.ClearTrigger aria-label="Clear input" />
            <Combobox.Trigger />
          </Combobox.IndicatorGroup>
        </Combobox.Control>

        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>

            <Combobox.ItemGroup>
              <Combobox.ItemGroupLabel>Popular</Combobox.ItemGroupLabel>
              {collection.items.slice(0, 3).map((item) => (
                <Combobox.Item item={item} key={item.value}>
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>

            <Combobox.ItemGroup>
              <Combobox.ItemGroupLabel>Others</Combobox.ItemGroupLabel>
              {collection.items.slice(3).map((item) => (
                <Combobox.Item item={item} key={item.value}>
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Combobox.Root>
    </Stack>
  )
}

const frameworks = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Preact', value: 'preact' },
  { label: 'Qwik', value: 'qwik' },
  { label: 'Lit', value: 'lit' },
  { label: 'Alpine.js', value: 'alpinejs' },
  { label: 'Ember', value: 'ember' },
  { label: 'Next.js', value: 'nextjs' },
]
