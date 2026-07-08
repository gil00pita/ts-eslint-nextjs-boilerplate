'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export const LineChartWithSeriesLabel = () => {
  const chart = useChart({
    data: [
      { linux: 120, mac: 10, month: 'January' },
      { linux: 110, mac: 95, month: 'February' },
      { linux: 125, mac: 87, month: 'March' },
      { linux: 30, mac: 88, month: 'May' },
      { linux: 122, mac: 98, month: 'June' },
      { linux: 15, mac: 90, month: 'August' },
    ],
    series: [
      { color: 'purple.solid', label: 'Mac sales', name: 'mac' },
      { color: 'blue.solid', label: 'Linux sales', name: 'linux' },
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
        <YAxis axisLine={false} stroke={chart.color('border')} tickLine={false} tickMargin={10} />
        <Tooltip animationDuration={100} content={<Chart.Tooltip />} cursor={false} />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Line
            dataKey={chart.key(item.name)}
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
