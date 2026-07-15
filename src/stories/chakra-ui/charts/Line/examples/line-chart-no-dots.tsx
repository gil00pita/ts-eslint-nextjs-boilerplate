'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export const LineChartNoDots = () => {
  const chart = useChart({
    data: [
      { linux: 120, mac: 80, month: 'January', windows: 186 },
      { linux: 110, mac: 95, month: 'February', windows: 165 },
      { linux: 125, mac: 87, month: 'March', windows: 190 },
      { linux: 130, mac: 88, month: 'May', windows: 195 },
      { linux: 122, mac: 98, month: 'June', windows: 182 },
      { linux: 115, mac: 90, month: 'August', windows: 175 },
      { linux: 124, mac: 86, month: 'October', windows: 180 },
      { linux: 126, mac: 91, month: 'November', windows: 185 },
    ],
    series: [
      { color: 'teal.solid', name: 'windows' },
      { color: 'purple.solid', name: 'mac' },
      { color: 'blue.solid', name: 'linux' },
    ],
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
          dataKey={chart.key('windows')}
          stroke={chart.color('border')}
          tickLine={false}
          tickMargin={10}
        />
        <Tooltip
          animationDuration={100}
          content={<Chart.Tooltip />}
          cursor={{ stroke: chart.color('border') }}
        />
        <Legend align="right" content={<Chart.Legend />} verticalAlign="top" />
        {chart.series.map((item) => (
          <Line
            activeDot={false}
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
