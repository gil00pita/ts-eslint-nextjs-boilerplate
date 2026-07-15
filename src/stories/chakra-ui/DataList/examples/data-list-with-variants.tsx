import { DataList, For, Stack } from '@chakra-ui/react'

export const DataListWithVariants = () => {
  return (
    <Stack gap="8">
      <For each={['subtle', 'bold']}>
        {(variant) => (
          <DataList.Root key={variant} variant={variant}>
            {stats.map((item) => (
              <DataList.Item key={item.label}>
                <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
                <DataList.ItemValue>{item.value}</DataList.ItemValue>
              </DataList.Item>
            ))}
          </DataList.Root>
        )}
      </For>
    </Stack>
  )
}

const stats = [
  { diff: -12, helpText: 'Till date', label: 'New Users', value: '234' },
  { diff: 12, helpText: 'Last 30 days', label: 'Sales', value: '£12,340' },
  { diff: 4.5, helpText: 'Last 30 days', label: 'Revenue', value: '3,450' },
]
