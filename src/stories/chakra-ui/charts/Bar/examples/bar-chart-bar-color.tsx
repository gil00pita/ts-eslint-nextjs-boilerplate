'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis, YAxis } from 'recharts'

export const BarChartBarColor = () => {
  const chart = useChart({
    data: [
      { allocation: 60, color: 'red.solid', type: 'Stock' },
      { allocation: 45, color: 'blue.solid', type: 'Crypto' },
      { allocation: 12, color: 'green.solid', type: 'ETF' },
      { allocation: 4, color: 'yellow.solid', type: 'Cash' },
    ],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <BarChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        <XAxis axisLine={false} dataKey={chart.key('type')} tickLine={false} />
        <YAxis
          axisLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
          tickLine={false}
        />
        <Bar
          dataKey={chart.key('allocation')}
          isAnimationActive={false}
          shape={(props) => <Rectangle {...props} fill={chart.color(props.payload!.color)} />}
        />
      </BarChart>
    </Chart.Root>
  )
}
