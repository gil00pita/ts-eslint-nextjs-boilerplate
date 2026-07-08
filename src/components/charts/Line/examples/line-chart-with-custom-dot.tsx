'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export const LineChartWithCustomDot = () => {
  const chart = useChart({
    data: [
      { month: 'January', sales: 186 },
      { month: 'March', sales: 190 },
      { month: 'May', sales: 195 },
      { month: 'August', sales: 175 },
      { month: 'October', sales: 180 },
    ],
    series: [{ color: 'teal.solid', name: 'sales' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <LineChart data={chart.data} responsive>
        <CartesianGrid horizontal={false} stroke={chart.color('border')} strokeDasharray="3 3" />
        <XAxis
          dataKey={chart.key('month')}
          stroke={chart.color('border')}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          dataKey={chart.key('sales')}
          domain={[160, 'dataMax + 10']}
          stroke={chart.color('border')}
        />
        <Tooltip
          animationDuration={100}
          content={<Chart.Tooltip />}
          cursor={{ stroke: chart.color('border') }}
        />
        {chart.series.map((item) => (
          <Line
            activeDot={{ r: 6, stroke: chart.color('teal.solid') }}
            connectNulls
            dataKey={chart.key(item.name)}
            dot={{ r: 5, stroke: 'white', strokeDasharray: '0' }}
            fill={chart.color(item.color)}
            isAnimationActive={false}
            key={item.name}
            stroke={chart.color(item.color)}
            strokeWidth={4}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}
