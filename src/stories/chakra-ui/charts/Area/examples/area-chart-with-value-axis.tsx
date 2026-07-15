'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts'

export const AreaChartWithValueAxis = () => {
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
      { color: 'orange.solid', name: 'linux' },
    ],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <AreaChart accessibilityLayer data={chart.data} margin={{ bottom: 24, left: 24 }} responsive>
        <XAxis
          dataKey={chart.key('month')}
          stroke={chart.color('border')}
          tickFormatter={(value) => value.slice(0, 3)}
          tickMargin={8}
        />
        <YAxis stroke={chart.color('border')} />
        <Tooltip animationDuration={100} content={<Chart.Tooltip />} cursor={false} />
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
