'use client'

import {
  Button,
  Combobox,
  Portal,
  Show,
  Span,
  useFilter,
  useListCollection,
} from '@chakra-ui/react'
import { useState } from 'react'
import { LuChevronsUpDown } from 'react-icons/lu'

export const ComboboxWithInputInContent = () => {
  const [selected, setSelected] = useState<SelectedState>({
    items: [],
    value: [],
  })

  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: frameworks,
  })

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue)
  }

  const handleValueChange = (details: Combobox.ValueChangeDetails<Item>) => {
    setSelected(details)
  }

  return (
    <Combobox.Root
      collection={collection}
      inputBehavior="autohighlight"
      onInputValueChange={handleInputChange}
      onValueChange={handleValueChange}
      selectionBehavior="clear"
      width="200px"
    >
      <Combobox.Control>
        <Combobox.Trigger asChild focusable>
          <Button size="sm" variant="outline" w="full">
            <Span flex="1" textAlign="start">
              <Show fallback="Select status" when={selected.items.length > 0}>
                {selected.items.map((item) => item.label).join(', ')}
              </Show>
            </Span>
            <LuChevronsUpDown />
          </Button>
        </Combobox.Trigger>
      </Combobox.Control>

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content px="0">
            <Combobox.Input
              border="none"
              minH="8"
              mt="-1"
              outline="none"
              placeholder="Search status"
              px="3"
            />
            <Combobox.ItemGroup borderTopWidth="1px" pt="1" px="1">
              {collection.items.map((item) => (
                <Combobox.Item item={item} key={item.value}>
                  {item.label}
                  <Combobox.ItemIndicator />
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

interface SelectedState {
  value: string[]
  items: Item[]
}

interface Item {
  label: string
  value: string
}

const frameworks = [
  { label: 'Todo', value: 'todo' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'Done', value: 'done' },
  { label: 'Blocked', value: 'blocked' },
  { label: 'Review', value: 'review' },
]
