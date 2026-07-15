'use client'

import { createListCollection, Select } from '@chakra-ui/react'

export const SelectExplorerDemo = () => {
  return (
    <Select.Root collection={frameworks} open={true} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Label>Select framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          <Select.ItemGroup>
            <Select.ItemGroupLabel
              color="fg.muted"
              fontSize="xs"
              fontWeight="semibold"
              px="2"
              py="1"
              textTransform="uppercase"
            >
              Popular
            </Select.ItemGroupLabel>
            {frameworks.items.slice(0, 2).map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                <Select.ItemText>{framework.label}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.ItemGroup>

          <Select.ItemGroup>
            <Select.ItemGroupLabel
              color="fg.muted"
              fontSize="xs"
              fontWeight="semibold"
              px="2"
              py="1"
              textTransform="uppercase"
            >
              Others
            </Select.ItemGroupLabel>
            {frameworks.items.slice(2).map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                <Select.ItemText>{framework.label}</Select.ItemText>
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.ItemGroup>
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}

const frameworks = createListCollection({
  items: [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ],
})
