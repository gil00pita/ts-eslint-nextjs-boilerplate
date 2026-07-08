'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

export const BarChartRounded = () => {
  const chart = useChart({
    data: [
      { allocation: 60, type: 'Stock' },
      { allocation: 45, type: 'Crypto' },
      { allocation: 12, type: 'ETF' },
      { allocation: 4, type: 'Cash' },
    ],
    series: [{ color: 'teal.solid', name: 'allocation' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <BarChart barSize={40} data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        <XAxis axisLine={false} dataKey={chart.key('type')} tickLine={false} />
        <YAxis
          axisLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
          tickLine={false}
        />
        {chart.series.map((item) => (
          <Bar
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            isAnimationActive={false}
            key={item.name}
            radius={10}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}
