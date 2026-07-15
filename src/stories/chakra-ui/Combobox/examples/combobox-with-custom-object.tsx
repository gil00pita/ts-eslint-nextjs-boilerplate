'use client'

import { Combobox, Portal, useFilter, useListCollection } from '@chakra-ui/react'

export const ComboboxWithCustomObject = () => {
  const { contains } = useFilter({ sensitivity: 'base' })

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: countries,
    itemToString: (item) => item.country,
    itemToValue: (item) => item.code,
  })

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    filter(details.inputValue)
  }

  return (
    <Combobox.Root collection={collection} onInputValueChange={handleInputChange}>
      <Combobox.Label>Search Countries</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="e.g. United States" />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>

      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>

            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.code}>
                {item.country}
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

const countries = [
  { code: 'US', country: 'United States', flag: '🇺🇸' },
  { code: 'CA', country: 'Canada', flag: '🇨🇦' },
  { code: 'AU', country: 'Australia', flag: '🇦🇺' },
  { code: 'UK', country: 'United Kingdom', flag: '🇬🇧' },
  { code: 'NZ', country: 'New Zealand', flag: '🇳🇿' },
  { code: 'ZA', country: 'South Africa', flag: '🇿🇦' },
  { code: 'IN', country: 'India', flag: '🇮🇳' },
  { code: 'CN', country: 'China', flag: '🇨🇳' },
  { code: 'JP', country: 'Japan', flag: '🇯🇵' },
  { code: 'KR', country: 'Korea', flag: '🇰🇷' },
  { code: 'VN', country: 'Vietnam', flag: '🇻🇳' },
  { code: 'TH', country: 'Thailand', flag: '🇹🇭' },
  { code: 'MY', country: 'Malaysia', flag: '🇲🇾' },
  { code: 'ID', country: 'Indonesia', flag: '🇮🇩' },
  { code: 'PH', country: 'Philippines', flag: '🇵🇭' },
  { code: 'SG', country: 'Singapore', flag: '🇸🇬' },
  { code: 'HK', country: 'Hong Kong', flag: '🇭🇰' },
  { code: 'MO', country: 'Macau', flag: '🇲🇴' },
  { code: 'TW', country: 'Taiwan', flag: '🇹🇼' },
]
