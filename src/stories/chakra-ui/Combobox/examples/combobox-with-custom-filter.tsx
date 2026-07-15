'use client'

import { Combobox, Portal, Span, Stack, useListCollection } from '@chakra-ui/react'

export const ComboboxWithCustomFilter = () => {
  const { collection, set } = useListCollection({
    initialItems: people,
    itemToString: (item) => item.name,
    itemToValue: (item) => item.id.toString(),
  })

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    const filteredItems = people.filter((item) => {
      const searchLower = details.inputValue.toLowerCase()
      const nameParts = item.name.toLowerCase().split(' ')
      const emailParts = item.email.toLowerCase().split('@')[0].split('.')

      return (
        item.name.toLowerCase().includes(searchLower) ||
        nameParts.some((part) => part.includes(searchLower)) ||
        emailParts.some((part) => part.includes(searchLower)) ||
        item.role.toLowerCase().includes(searchLower)
      )
    })
    set(filteredItems)
  }

  return (
    <Combobox.Root
      collection={collection}
      inputBehavior="autocomplete"
      onInputValueChange={handleInputChange}
      placeholder="Search by name, email, or role..."
      width="320px"
    >
      <Combobox.Label>Select Person</Combobox.Label>

      <Combobox.Control>
        <Combobox.Input />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No matches found</Combobox.Empty>
            {collection.items.map((person) => (
              <Combobox.Item item={person} key={person.id}>
                <Stack gap={0}>
                  <Span fontWeight="medium" textStyle="sm">
                    {person.name}
                  </Span>
                  <Span color="fg.muted" textStyle="xs">
                    {person.email}
                  </Span>
                </Stack>
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

const people = [
  {
    email: 'john@example.com',
    id: 1,
    name: 'John Smith',
    role: 'Sales Manager',
  },
  {
    email: 'sarah@example.com',
    id: 2,
    name: 'Sarah Johnson',
    role: 'UI Designer',
  },
  {
    email: 'michael@example.com',
    id: 3,
    name: 'Michael Brown',
    role: 'Software Engineer',
  },
  {
    email: 'emily@example.com',
    id: 4,
    name: 'Emily Davis',
    role: 'AI Engineer',
  },
  {
    email: 'james@example.com',
    id: 5,
    name: 'James Wilson',
    role: 'Chief Executive Officer',
  },
]
