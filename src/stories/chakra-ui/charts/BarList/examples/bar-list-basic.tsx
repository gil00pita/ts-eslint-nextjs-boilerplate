'use client'

import { BarList, type BarListData, useChart } from '@chakra-ui/charts'

export const BarListBasic = () => {
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
        <BarList.Bar />
        <BarList.Value />
      </BarList.Content>
    </BarList.Root>
  )
}
