'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Line, LineChart } from 'recharts'

export const SparklineLineChart = () => {
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
      <LineChart data={chart.data} responsive>
        {chart.series.map((item) => (
          <Line
            dataKey={chart.key(item.name)}
            dot={false}
            isAnimationActive={false}
            key={item.name}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}
