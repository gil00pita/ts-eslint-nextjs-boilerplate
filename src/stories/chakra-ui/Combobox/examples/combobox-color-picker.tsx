'use client'

import {
  ColorSwatch,
  Combobox,
  HStack,
  Stack,
  Text,
  useFilter,
  useListCollection,
} from '@chakra-ui/react'
import { useState } from 'react'

export const ComboboxColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState<ColorItem | null>(null)

  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: colors,
    itemToString: (item) => item.name,
    itemToValue: (item) => item.id,
  })

  const handleValueChange = (details: Combobox.ValueChangeDetails) => {
    setSelectedColor(details.items[0] || null)
  }

  const handleInputValueChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue)
  }

  return (
    <Combobox.Root
      collection={collection}
      maxW="320px"
      onInputValueChange={handleInputValueChange}
      onValueChange={handleValueChange}
      placeholder="Color"
    >
      <Combobox.Label srOnly>Select Color</Combobox.Label>
      <Stack align="center" direction="row" gap={3}>
        <Combobox.Control>
          <Combobox.Input />
          <Combobox.IndicatorGroup>
            <Combobox.ClearTrigger />
            <Combobox.Trigger />
          </Combobox.IndicatorGroup>
        </Combobox.Control>
        {selectedColor && <ColorSwatch value={selectedColor.value} />}
      </Stack>

      <Combobox.Content>
        <Combobox.ItemGroup>
          <Combobox.ItemGroupLabel>Color</Combobox.ItemGroupLabel>
          {collection.items.map((color) => (
            <Combobox.Item item={color} key={color.id}>
              <HStack align="center" direction="row" gap={3}>
                <ColorSwatch boxSize="6" value={color.value} />
                <HStack flex="1" gap="1">
                  <Text fontWeight="medium">{color.name}</Text>
                  <Text color="fg.muted" textStyle="sm">
                    {color.value}
                  </Text>
                </HStack>
              </HStack>
              <Combobox.ItemIndicator />
            </Combobox.Item>
          ))}
        </Combobox.ItemGroup>
      </Combobox.Content>
    </Combobox.Root>
  )
}

interface ColorItem {
  id: string
  name: string
  value: string
}

const colors: ColorItem[] = [
  { id: 'red', name: 'Red', value: '#EF4444' },
  { id: 'blue', name: 'Blue', value: '#3B82F6' },
  { id: 'green', name: 'Green', value: '#10B981' },
  { id: 'purple', name: 'Purple', value: '#8B5CF6' },
  { id: 'yellow', name: 'Yellow', value: '#F59E0B' },
  { id: 'pink', name: 'Pink', value: '#EC4899' },
]
