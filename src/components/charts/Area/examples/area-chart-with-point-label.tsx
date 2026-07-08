'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis } from 'recharts'

export const AreaChartWithPointLabel = () => {
  const chart = useChart({
    data: [
      { month: 'January', sales: 186 },
      { month: 'February', sales: 40 },
      { month: 'March', sales: 190 },
      { month: 'May', sales: 195 },
      { month: 'June', sales: 240 },
      { month: 'August', sales: 175 },
      { month: 'October', sales: 180 },
      { month: 'November', sales: 185 },
      { month: 'December', sales: 300 },
    ],
    series: [{ color: 'teal.solid', name: 'sales' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <AreaChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
        />
        <Tooltip animationDuration={100} content={<Chart.Tooltip />} cursor={false} />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Area
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            isAnimationActive={false}
            key={item.name}
            stackId="a"
            stroke={chart.color(item.color)}
          />
        ))}
        {chart.series.map((item) => (
          <Area
            activeDot={false}
            dataKey={chart.key(item.name)}
            dot={{ fill: chart.color(item.color), fillOpacity: 1 }}
            fill="none"
            isAnimationActive={false}
            key={item.name}
            label={{
              fill: 'currentColor',
              position: 'top',
              style: { fontWeight: '600' },
            }}
            legendType="none"
            stackId="b"
            stroke="none"
            tooltipType="none"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}
