'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

export const AreaChartSigned = () => {
  const chart = useChart({
    data: [
      { linux: 120, mac: 80, month: 'January', windows: 186 },
      { linux: 110, mac: 95, month: 'February', windows: -165 },
      { linux: -115, mac: 90, month: 'August', windows: 175 },
      { linux: 124, mac: 86, month: 'October', windows: 180 },
      { linux: 126, mac: -91, month: 'November', windows: 185 },
    ],
    series: [
      { color: 'teal.solid', name: 'windows' },
      { color: 'purple.solid', name: 'mac' },
      { color: 'blue.solid', name: 'linux' },
    ],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <AreaChart accessibilityLayer data={chart.data} responsive stackOffset="sign">
        <CartesianGrid stroke={chart.color('border')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          tickFormatter={(value) => value.slice(0, 3)}
          tickLine={false}
          tickMargin={8}
        />
        <YAxis
          axisLine={false}
          tickFormatter={chart.formatNumber({ style: 'percent' })}
          tickLine={false}
        />
        <Tooltip animationDuration={100} content={<Chart.Tooltip />} cursor={false} />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Area
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            isAnimationActive={false}
            key={item.name}
            stackId="a"
            stroke={chart.color(item.color)}
            type="natural"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}
