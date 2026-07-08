'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export const LineChartWithGradient = () => {
  const chart = useChart({
    data: [
      { month: 'January', temp: -20 },
      { month: 'February', temp: -10 },
      { month: 'March', temp: 0 },
      { month: 'May', temp: 10 },
      { month: 'June', temp: 20 },
      { month: 'August', temp: 4 },
      { month: 'October', temp: 40 },
      { month: 'November', temp: -10 },
    ],
    series: [{ color: 'teal.solid', name: 'temp' }],
  })

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
        <YAxis
          axisLine={false}
          dataKey={chart.key('temp')}
          stroke={chart.color('border')}
          tickLine={false}
          tickMargin={10}
        />
        <Tooltip
          animationDuration={100}
          content={<Chart.Tooltip hideIndicator />}
          cursor={{ stroke: chart.color('border') }}
        />
        <defs>
          <Chart.Gradient
            id="lc-gradient"
            stops={[
              { color: 'teal.solid', offset: '0%' },
              { color: 'purple.solid', offset: '20%' },
              { color: 'orange.solid', offset: '40%' },
              { color: 'green.solid', offset: '75%' },
              { color: 'red.solid', offset: '100%' },
            ]}
          />
        </defs>
        {chart.series.map((item) => (
          <Line
            activeDot={{
              fill: chart.color('fg'),
              r: 4,
              stroke: chart.color('bg'),
              strokeWidth: 1,
            }}
            dataKey={chart.key(item.name)}
            dot={{
              fill: chart.color('fg'),
              stroke: chart.color('bg'),
              strokeWidth: 1,
            }}
            fill="none"
            isAnimationActive={false}
            key={item.name}
            r={2}
            stroke="url(#lc-gradient)"
            strokeWidth={4}
            type="natural"
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}
