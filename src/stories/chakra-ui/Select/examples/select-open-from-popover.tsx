'use client'

import { Button, createListCollection, Popover, Portal, Select } from '@chakra-ui/react'

export const SelectOpenFromPopover = () => {
  return (
    <Popover.Root size="xs">
      <Popover.Trigger asChild>
        <Button size="sm" variant="outline">
          Select in Popover
        </Button>
      </Popover.Trigger>

      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Header>Select in Popover</Popover.Header>
            <Popover.Body>
              <Select.Root
                collection={frameworks}
                positioning={{ placement: 'bottom', sameWidth: true }}
                size="sm"
              >
                <Select.HiddenSelect />
                <Select.Control>
                  <Select.Trigger>
                    <Select.ValueText placeholder="Select framework" />
                  </Select.Trigger>
                  <Select.IndicatorGroup>
                    <Select.Indicator />
                  </Select.IndicatorGroup>
                </Select.Control>
                <Select.Positioner>
                  <Select.Content width="full">
                    {frameworks.items.map((item) => (
                      <Select.Item item={item} key={item.value}>
                        {item.label}
                        <Select.ItemIndicator />
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
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
