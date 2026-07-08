'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export const LineChartAxesLabel = () => {
  const chart = useChart({
    data: [
      { Customers: 10, month: 'January' },
      { Customers: 95, month: 'February' },
      { Customers: 87, month: 'March' },
      { Customers: 88, month: 'May' },
      { Customers: 65, month: 'June' },
      { Customers: 90, month: 'August' },
    ],
    series: [{ color: 'teal.solid', name: 'Customers' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          label={{ position: 'bottom', value: 'Month' }}
          stroke={chart.color('border')}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          axisLine={false}
          label={{ angle: -90, position: 'left', value: 'Customers' }}
          stroke={chart.color('border')}
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
