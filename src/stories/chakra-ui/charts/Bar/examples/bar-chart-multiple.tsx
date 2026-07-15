'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

export const BarChartMultiple = () => {
  const chart = useChart({
    data: [
      { excellent: 70, fair: 100, good: 200, poor: 40, type: 'mobile' },
      { excellent: 90, fair: 40, good: 120, poor: 15, type: 'marketing' },
      { excellent: 180, fair: 135, good: 220, poor: 70, type: 'social' },
      { excellent: 95, fair: 155, good: 75, poor: 175, type: 'ecommerce' },
    ],
    series: [
      { color: 'blue.solid', name: 'poor' },
      { color: 'orange.solid', name: 'fair' },
      { color: 'yellow.solid', name: 'good' },
      { color: 'green.solid', name: 'excellent' },
    ],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <BarChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        <XAxis dataKey={chart.key('type')} stroke={chart.color('border')} tickLine={false} />
        <YAxis stroke={chart.color('border')} tickLine={false} />
        <Tooltip
          animationDuration={100}
          content={<Chart.Tooltip />}
          cursor={{ fill: chart.color('bg.muted') }}
        />
        <Legend
          align="right"
          content={<Chart.Legend orientation="vertical" />}
          layout="vertical"
          verticalAlign="top"
          wrapperStyle={{ paddingLeft: 30 }}
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
