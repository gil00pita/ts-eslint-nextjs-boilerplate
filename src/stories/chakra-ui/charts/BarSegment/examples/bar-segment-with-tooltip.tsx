'use client'

import { BarSegment, useChart } from '@chakra-ui/charts'

export const BarSegmentWithTooltip = () => {
  const chart = useChart({
    data: [
      { color: 'teal.solid', name: 'Google', value: 500000 },
      { color: 'blue.solid', name: 'Direct', value: 100000 },
      { color: 'orange.solid', name: 'Bing', value: 200000 },
      { color: 'purple.solid', name: 'Yandex', value: 100000 },
    ],
    sort: { by: 'value', direction: 'desc' },
  })

  return (
    <BarSegment.Root chart={chart}>
      <BarSegment.Content>
        <BarSegment.Bar tooltip />
      </BarSegment.Content>
      <BarSegment.Legend showPercent />
    </BarSegment.Root>
  )
}
