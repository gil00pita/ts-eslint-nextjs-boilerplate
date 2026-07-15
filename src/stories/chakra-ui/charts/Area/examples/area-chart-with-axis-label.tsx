'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Area, AreaChart, Label, Tooltip, XAxis, YAxis } from 'recharts'

export const AreaChartWithAxisLabel = () => {
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
      <AreaChart accessibilityLayer data={chart.data} margin={{ bottom: 24, left: 24 }} responsive>
        <XAxis
          dataKey={chart.key('month')}
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
          tickMargin={8}
        >
          <Label offset={-20} position="insideBottom">
            Month
          </Label>
        </XAxis>
        <YAxis axisLine={false} tickLine={false}>
          <Label angle={-90} position="insideLeft">
            Count
          </Label>
        </YAxis>
        <Tooltip />
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
      </AreaChart>
    </Chart.Root>
  )
}
