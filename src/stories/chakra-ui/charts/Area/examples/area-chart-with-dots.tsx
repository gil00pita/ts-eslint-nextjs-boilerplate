'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

export const AreaChartWithDots = () => {
  const chart = useChart({
    data: [
      { linux: 120, mac: 80, month: 'January', windows: 186 },
      { linux: 110, mac: 95, month: 'February', windows: 165 },
      { linux: 125, mac: 87, month: 'March', windows: 190 },
      { linux: 130, mac: 88, month: 'May', windows: 195 },
      { linux: 122, mac: 98, month: 'June', windows: 182 },
      { linux: 349, mac: 90, month: 'August', windows: 175 },
      { linux: 400, mac: 86, month: 'October', windows: 180 },
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
      <AreaChart data={chart.data} margin={{ right: 20 }} responsive>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        <YAxis axisLine={false} stroke={chart.color('border')} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          tick={false}
          tickFormatter={(value) => value.slice(0, 3)}
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
          />
        ))}

        {chart.series.map((item) => (
          <Area
            activeDot={false}
            dataKey={chart.key(item.name)}
            dot={{ fill: chart.color(item.color), fillOpacity: 1 }}
            fill="none"
            isAnimationActive={false}
            key={item.name}
            legendType="none"
            stackId="b"
            stroke="none"
            tooltipType="none"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}
