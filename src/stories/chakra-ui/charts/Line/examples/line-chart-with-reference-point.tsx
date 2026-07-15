'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export const LineChartWithReferencePoint = () => {
  const chart = useChart({
    data: [
      { lastYear: 4, month: 'January', thisYear: 10 },
      { lastYear: 50, month: 'February', thisYear: 95 },
      { lastYear: 59, month: 'March', thisYear: 87 },
      { lastYear: 60, month: 'May', thisYear: 88 },
      { lastYear: 50, month: 'June', thisYear: 65 },
      { lastYear: 50, month: 'August', thisYear: 90 },
      { lastYear: 89, month: 'October', thisYear: null },
      { lastYear: 120, month: 'November', thisYear: null },
      { lastYear: 80, month: 'December', thisYear: null },
    ],
    series: [
      { color: 'teal.solid', label: 'This Year', name: 'thisYear' },
      { color: 'gray.emphasized', label: 'Last Year', name: 'lastYear' },
    ],
  })

  const latest = chart.data.findLast((item) => item.thisYear !== null)

  return (
    <Chart.Root chart={chart} maxH="sm">
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          stroke={chart.color('border')}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis axisLine={false} stroke={chart.color('border')} tickLine={false} tickMargin={10} />
        <Tooltip animationDuration={100} content={<Chart.Tooltip />} cursor={false} />
        <ReferenceDot
          fill={chart.color('teal.solid')}
          r={6}
          stroke={chart.color('bg')}
          x={latest?.month}
          y={latest?.thisYear}
        />
        <ReferenceLine
          label={{
            fill: chart.color('purple.fg'),
            offset: 10,
            position: 'top',
            value: 'Target',
          }}
          stroke={chart.color('purple.fg')}
          strokeDasharray="5 5"
          y={110}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Line
            dataKey={chart.key(item.name)}
            dot={false}
            isAnimationActive={false}
            key={item.name}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}
