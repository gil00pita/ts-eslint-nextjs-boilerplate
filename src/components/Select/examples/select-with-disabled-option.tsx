'use client'

import { createListCollection, Portal, Select } from '@chakra-ui/react'

export const SelectWithDisabledOption = () => {
  return (
    <Select.Root collection={animals} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Label>Select animal</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Animal" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {animals.items.map((animal) => (
              <Select.Item item={animal} key={animal.value}>
                {animal.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const animals = createListCollection({
  items: [
    { label: 'Red Panda', value: 'red panda' },
    { disabled: true, label: 'Cat', value: 'cat' },
    { label: 'Dog', value: 'dog' },
    { disabled: true, label: 'Aardvark', value: 'aardvark' },
    { label: 'Kangaroo', value: 'kangaroo' },
    { label: 'Snake', value: 'snake' },
  ],
})
