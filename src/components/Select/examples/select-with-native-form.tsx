'use client'

import { Button, createListCollection, Portal, Select, Stack } from '@chakra-ui/react'

export const SelectWithNativeForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    console.log(formData.get('framework'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack align="flex-start" gap="4" maxW="sm">
        <Select.Root collection={frameworks} name="framework" size="sm">
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
          <Portal>
            <Select.Positioner>
              <Select.Content>
                {frameworks.items.map((framework) => (
                  <Select.Item item={framework} key={framework.value}>
                    {framework.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Portal>
        </Select.Root>
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
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
