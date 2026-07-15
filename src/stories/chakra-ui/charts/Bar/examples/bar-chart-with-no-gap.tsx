'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis } from 'recharts'

export const BarChartWithNoGap = () => {
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
    <Chart.Root chart={chart} maxH="md">
      <BarChart barCategoryGap="0" data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
        />
        <Tooltip
          animationDuration={100}
          content={<Chart.Tooltip />}
          cursor={{ fill: chart.color('bg.muted') }}
        />
        {chart.series.map((item) => (
          <Bar
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            isAnimationActive={false}
            key={item.name}
            stroke={chart.color('bg')}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}
