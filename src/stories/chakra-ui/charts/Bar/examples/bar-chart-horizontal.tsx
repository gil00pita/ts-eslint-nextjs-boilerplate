'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

export const BarChartHorizontal = () => {
  const chart = useChart({
    data: [
      { linux: 120, mac: 80, month: 'January', windows: 186 },
      { linux: 110, mac: 95, month: 'February', windows: 165 },
      { linux: 125, mac: 87, month: 'March', windows: 190 },
      { linux: 124, mac: 86, month: 'October', windows: 180 },
      { linux: 126, mac: 91, month: 'November', windows: 185 },
    ],
    series: [
      { color: 'teal.solid', name: 'windows', stackId: 'a' },
      { color: 'purple.solid', name: 'mac', stackId: 'a' },
      { color: 'blue.solid', name: 'linux', stackId: 'a' },
    ],
  })

  return (
    <Chart.Root chart={chart} maxH="md">
      <BarChart data={chart.data} layout="vertical" responsive>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        <XAxis axisLine={false} tickLine={false} type="number" />
        <YAxis
          dataKey={chart.key('month')}
          orientation="left"
          stroke={chart.color('border')}
          tickFormatter={(value) => (typeof value === 'string' ? value.slice(0, 3) : value)}
          type="category"
        />
        <Tooltip
          animationDuration={100}
          content={<Chart.Tooltip />}
          cursor={{ fill: chart.color('bg.muted') }}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Bar
            barSize={30}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            isAnimationActive={false}
            key={item.name}
            stackId={item.stackId}
            stroke={chart.color(item.color)}
          />
        ))}
      </BarChart>
    </Chart.Root>
  )
}
