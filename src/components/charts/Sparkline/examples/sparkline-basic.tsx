'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Area, AreaChart } from 'recharts'

export const SparklineBasic = () => {
  const chart = useChart({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
    ],
    series: [{ color: 'teal.solid', name: 'value' }],
  })

  return (
    <Chart.Root chart={chart} height="12" width="28">
      <AreaChart data={chart.data} responsive>
        {chart.series.map((item) => (
          <Area
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            isAnimationActive={false}
            key={item.name}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}
