'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export const LineChartWithDashed = () => {
  const chart = useChart({
    data: [
      { mac: 165, month: 'January', windows: 186 },
      { mac: 155, month: 'February', windows: 165 },
      { mac: 175, month: 'March', windows: 190 },
      { mac: 180, month: 'May', windows: 195 },
      { mac: 170, month: 'June', windows: 182 },
      { mac: 160, month: 'August', windows: 175 },
      { mac: 165, month: 'October', windows: 180 },
      { mac: 170, month: 'November', windows: 185 },
    ],
    series: [
      { color: 'teal.solid', name: 'windows', strokeDasharray: '5 5' },
      { color: 'purple.solid', name: 'mac' },
    ],
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
          dataKey={chart.key('windows')}
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
