'use client'

import { Combobox, Portal, useFilter, useListCollection } from '@chakra-ui/react'

export const ComboboxWithOptionGroup = () => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.type,
    initialItems: frameworks,
  })

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
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
            {collection.group().map(([group, items]) => (
              <Combobox.ItemGroup key={group}>
                <Combobox.ItemGroupLabel>{group}</Combobox.ItemGroupLabel>
                <Combobox.ItemGroup>
                  {items.map((item) => (
                    <Combobox.Item item={item} key={item.value}>
                      {item.label}
                      <Combobox.ItemIndicator />
                    </Combobox.Item>
                  ))}
                </Combobox.ItemGroup>
              </Combobox.ItemGroup>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

const frameworks = [
  { label: 'React', type: 'Frontend', value: 'react' },
  { label: 'Node.js', type: 'Backend', value: 'nodejs' },
  { label: 'Django', type: 'Backend', value: 'django' },
  { label: 'Vue', type: 'Frontend', value: 'vue' },
  { label: 'Svelte', type: 'Frontend', value: 'svelte' },
  { label: 'Next.js', type: 'Frontend', value: 'nextjs' },
  { label: 'Express', type: 'Backend', value: 'express' },
  { label: 'Ruby on Rails', type: 'Backend', value: 'rails' },
]
