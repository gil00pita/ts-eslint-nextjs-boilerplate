'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceArea,
  ReferenceLine,
  Tooltip,
  XAxis,
} from 'recharts'

export const BarChartWithReferenceLines = () => {
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
    series: [{ color: 'blue.solid', name: 'sales' }],
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
        <Tooltip animationDuration={100} content={<Chart.Tooltip />} cursor={false} />
        <ReferenceArea
          fill={chart.color('red.muted')}
          fillOpacity={0.4}
          label={{
            fill: chart.color('red.fg'),
            position: 'insideTopLeft',
            value: 'top line',
          }}
          y1={76000}
          y2={90000}
        />
        <ReferenceLine stroke={chart.color('red.fg')} strokeDasharray="3 3" y={80000} />
        {chart.series.map((item) => (
          <Bar
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.64}
            isAnimationActive={false}
            key={item.name}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}
