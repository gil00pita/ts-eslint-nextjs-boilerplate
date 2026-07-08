'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'

export const LineChartStartEndTick = () => {
  const chart = useChart({
    data: [
      { month: 'January', sale: 10 },
      { month: 'February', sale: 95 },
      { month: 'March', sale: 87 },
      { month: 'May', sale: 88 },
      { month: 'June', sale: 65 },
      { month: 'August', sale: 90 },
    ],
    series: [{ color: 'teal.solid', name: 'sale' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          label={{
            position: 'bottom',
            value: '[January - August] Customers',
          }}
          stroke={chart.color('border')}
          tickFormatter={(value) => value.slice(0, 3)}
          ticks={[chart.data[0].month, chart.data[chart.data.length - 1].month]}
        />
        <YAxis axisLine={false} stroke={chart.color('border')} tickLine={false} tickMargin={10} />
        {chart.series.map((item) => (
          <Line
            dataKey={chart.key(item.name)}
            dot={false}
            isAnimationActive={false}
            key={item.name}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            type="natural"
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}
