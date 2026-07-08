'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Line, LineChart, ReferenceLine } from 'recharts'

export const SparklineWithReference = () => {
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
    <Chart.Root chart={chart} maxW="200px">
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
        <ReferenceLine
          label={{
            fill: chart.color('fg.muted'),
            position: 'left',
            value: chart.getMin('value'),
          }}
          stroke={chart.color('border.emphasized')}
          strokeDasharray="4 4"
          y={chart.getMin('value')}
        />
        <ReferenceLine
          label={{
            fill: chart.color('fg.muted'),
            position: 'right',
            value: chart.getMax('value'),
          }}
          stroke={chart.color('border.emphasized')}
          strokeDasharray="4 4"
          y={chart.getMax('value')}
        />
      </LineChart>
    </Chart.Root>
  )
}
