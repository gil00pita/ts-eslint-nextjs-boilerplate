'use client'

import { Box, Combobox, Heading, Stack, Text, useFilter, useListCollection } from '@chakra-ui/react'

export const ComboboxWithSelectionBehavior = () => {
  return (
    <Stack gap="8" p="4">
      <ComboboxDemo selectionBehavior="replace" />
      <ComboboxDemo selectionBehavior="clear" />
      <ComboboxDemo selectionBehavior="preserve" />
    </Stack>
  )
}

const descriptions = {
  clear: 'Input value is cleared after selection',
  preserve: 'Input value is preserved after selection',
  replace: 'Selected item replaces the input value',
}

const ComboboxDemo = (props: Partial<Combobox.RootProps>) => {
  const { selectionBehavior = 'replace' } = props

  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: companies,
  })

  return (
    <Box>
      <Stack mb={4}>
        <Heading as="h3">{selectionBehavior} Selection</Heading>
        <Text color="gray.600" textStyle="sm">
          {descriptions[selectionBehavior]}
        </Text>
      </Stack>

      <Combobox.Root
        collection={collection}
        onInputValueChange={(details) => filter(details.inputValue)}
        selectionBehavior={selectionBehavior}
      >
        <Combobox.Label>Select Companies</Combobox.Label>

        <Combobox.Control>
          <Combobox.Input />
        </Combobox.Control>

        <Combobox.Content>
          {collection.items.map((item) => (
            <Combobox.Item item={item} key={item.value}>
              {item.label}
              <Combobox.ItemIndicator />
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Root>
    </Box>
  )
}

const companies = [
  { label: 'Apple', value: 'apple' },
  { label: 'Amazon', value: 'amazon' },
  { label: 'Meta', value: 'meta' },
  { label: 'Netflix', value: 'netflix' },
  { label: 'Google', value: 'google' },
]
