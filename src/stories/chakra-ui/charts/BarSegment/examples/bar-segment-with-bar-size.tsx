'use client'

import { BarSegment, useChart } from '@chakra-ui/charts'

export const BarSegmentWithBarSize = () => {
  const chart = useChart({
    data: [
      { color: 'green.solid', name: 'Ruby', value: 450000 },
      { color: 'yellow.solid', name: 'CSS', value: 150000 },
      { color: 'orange.solid', name: 'JavaScript', value: 300000 },
      { color: 'purple.solid', name: 'HTML', value: 175000 },
      { color: 'blue.solid', name: 'React', value: 225000 },
    ],
    sort: { by: 'value', direction: 'desc' },
  })

  return (
    <BarSegment.Root barSize="3" chart={chart}>
      <BarSegment.Content>
        <BarSegment.Bar gap="0.5" />
      </BarSegment.Content>
      <BarSegment.Legend gap="2" showPercent textStyle="xs" />
    </BarSegment.Root>
  )
}
