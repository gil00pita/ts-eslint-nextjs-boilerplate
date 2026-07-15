'use client'

import { createListCollection, Portal, Select } from '@chakra-ui/react'
import { groupBy } from 'es-toolkit'

export const SelectWithCountry = () => {
  return (
    <Select.Root collection={countries} defaultValue={['NG']} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Label>Select country</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="-" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {continents.map(([continent, items]) => (
              <Select.ItemGroup key={continent}>
                <Select.ItemGroupLabel>{continent}</Select.ItemGroupLabel>
                {items.map((item) => (
                  <Select.Item item={item} key={item.value}>
                    {countries.stringifyItem(item)}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}

const countries = createListCollection({
  items: [
    { continent: 'America', flag: '🇺🇸', label: 'United States', value: 'US' },
    { continent: 'America', flag: '🇨🇦', label: 'Canada', value: 'CA' },
    { continent: 'America', flag: '🇲🇽', label: 'Mexico', value: 'MX' },
    { continent: 'America', flag: '🇧🇷', label: 'Brazil', value: 'BR' },
    { continent: 'Africa', flag: '🇿🇦', label: 'South Africa', value: 'ZA' },
    { continent: 'Africa', flag: '🇳🇬', label: 'Nigeria', value: 'NG' },
    { continent: 'Africa', flag: '🇲🇦', label: 'Morocco', value: 'MA' },
    { continent: 'Africa', flag: '🇪🇬', label: 'Egypt', value: 'EG' },
    { continent: 'Asia', flag: '🇨🇳', label: 'China', value: 'CN' },
    { continent: 'Asia', flag: '🇯🇵', label: 'Japan', value: 'JP' },
    { continent: 'Asia', flag: '🇮🇳', label: 'India', value: 'IN' },
    { continent: 'Asia', flag: '🇰🇷', label: 'South Korea', value: 'KR' },
    { continent: 'Europe', flag: '🇬🇧', label: 'United Kingdom', value: 'GB' },
    { continent: 'Europe', flag: '🇫🇷', label: 'France', value: 'FR' },
    { continent: 'Europe', flag: '🇩🇪', label: 'Germany', value: 'DE' },
    { continent: 'Europe', flag: '🇮🇹', label: 'Italy', value: 'IT' },
    { continent: 'Europe', flag: '🇪🇸', label: 'Spain', value: 'ES' },
    { continent: 'Oceania', flag: '🇦🇺', label: 'Australia', value: 'AU' },
    { continent: 'Oceania', flag: '🇳🇿', label: 'New Zealand', value: 'NZ' },
    { continent: 'Oceania', flag: '🇫🇯', label: 'Fiji', value: 'FJ' },
  ],
  itemToString: (item) => `${item.flag} ${item.label}`,
  itemToValue: (item) => item.value,
})

const continents = Object.entries(groupBy(countries.items, (item) => item.continent))
