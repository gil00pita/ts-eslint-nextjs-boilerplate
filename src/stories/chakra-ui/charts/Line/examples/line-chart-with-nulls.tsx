'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export const LineChartWithNulls = () => {
  const chart = useChart({
    data: [
      { month: 'January', sales: 186 },
      { month: 'February', sales: null },
      { month: 'March', sales: 190 },
      { month: 'May', sales: 195 },
      { month: 'June', sales: null },
      { month: 'August', sales: 175 },
      { month: 'October', sales: 180 },
    ],
    series: [{ color: 'teal.solid', name: 'sales' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <LineChart data={chart.data} margin={{ left: 40, right: 40, top: 40 }} responsive>
        <CartesianGrid horizontal={false} stroke={chart.color('border')} strokeDasharray="3 3" />
        <XAxis
          dataKey={chart.key('month')}
          stroke={chart.color('border')}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          dataKey={chart.key('sales')}
          domain={[140, 'dataMax']}
          stroke={chart.color('border')}
        />
        <Tooltip
          animationDuration={100}
          content={<Chart.Tooltip hideLabel />}
          cursor={{ stroke: chart.color('border') }}
        />
        {chart.series.map((item) => (
          <Line
            connectNulls
            dataKey={chart.key(item.name)}
            dot={{ strokeDasharray: '0' }}
            fill={chart.color(item.color)}
            isAnimationActive={false}
            key={item.name}
            stroke={chart.color(item.color)}
            strokeDasharray={item.strokeDasharray}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}
