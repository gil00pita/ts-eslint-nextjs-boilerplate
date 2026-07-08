'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

export const BarChartWithFormatter = () => {
  const chart = useChart({
    data: [
      { month: 'June', sales: 63000 },
      { month: 'July', sales: 72000 },
      { month: 'August', sales: 85000 },
      { month: 'September', sales: 79000 },
      { month: 'October', sales: 90000 },
      { month: 'November', sales: 95000 },
      { month: 'December', sales: 88000 },
    ],
    series: [{ color: 'teal.solid', name: 'sales' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <BarChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          tickFormatter={chart.formatNumber({
            currency: 'USD',
            notation: 'compact',
            style: 'currency',
          })}
          tickLine={false}
        />
        <Tooltip
          animationDuration={0}
          content={<Chart.Tooltip />}
          cursor={{ fill: chart.color('bg.muted') }}
        />
        {chart.series.map((item) => (
          <Bar
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            isAnimationActive={false}
            key={item.name}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}
