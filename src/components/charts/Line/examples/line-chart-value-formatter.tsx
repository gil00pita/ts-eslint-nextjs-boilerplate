'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export const LineChartValueFormatter = () => {
  const chart = useChart({
    data: [
      { month: 'January', revenue: 10000 },
      { month: 'February', revenue: 95000 },
      { month: 'March', revenue: 87000 },
      { month: 'May', revenue: 88000 },
      { month: 'June', revenue: 65000 },
      { month: 'August', revenue: 90000 },
    ],
    series: [{ color: 'teal.solid', name: 'revenue' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          stroke={chart.color('border')}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          axisLine={false}
          stroke={chart.color('border')}
          tickFormatter={chart.formatNumber({
            currency: 'USD',
            notation: 'compact',
            style: 'currency',
          })}
          tickLine={false}
          tickMargin={10}
        />
        <Tooltip animationDuration={100} content={<Chart.Tooltip />} cursor={false} />
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
