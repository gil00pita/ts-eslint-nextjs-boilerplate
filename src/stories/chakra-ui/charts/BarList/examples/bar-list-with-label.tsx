'use client'

import { BarList, type BarListData, useChart } from '@chakra-ui/charts'

export const BarListWithLabel = () => {
  const chart = useChart<BarListData>({
    data: [
      { name: 'Google', value: 1200000 },
      { name: 'Direct', value: 100000 },
      { name: 'Bing', value: 200000 },
      { name: 'Yahoo', value: 20000 },
      { name: 'ChatGPT', value: 1345000 },
      { name: 'Github', value: 100000 },
      { name: 'Yandex', value: 100000 },
    ],
    series: [{ color: 'teal.subtle', name: 'name' }],
    sort: { by: 'value', direction: 'desc' },
  })

  return (
    <BarList.Root chart={chart}>
      <BarList.Content>
        <BarList.Label flex="1" title="Search Engine">
          <BarList.Bar />
        </BarList.Label>
        <BarList.Label title="Downloads" titleAlignment="end">
          <BarList.Value />
        </BarList.Label>
      </BarList.Content>
    </BarList.Root>
  )
}
