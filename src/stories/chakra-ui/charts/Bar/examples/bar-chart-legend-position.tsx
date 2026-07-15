'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

export const BarChartLegendPosition = () => {
  const chart = useChart({
    data: [
      { category: 'Web Server', maxValue: 450, value: 200 },
      { category: 'Credit Card', maxValue: 900, value: 700 },
      { category: 'Payment', maxValue: 500, value: 439 },
      { category: 'API', maxValue: 200, value: 147 },
      { category: 'AddToCart', maxValue: 100, value: 84 },
    ],
    series: [
      { color: 'blue.solid', name: 'value' },
      { color: 'green.solid', name: 'maxValue' },
    ],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <BarChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        <XAxis dataKey={chart.key('category')} stroke={chart.color('border')} tickLine={false} />
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
