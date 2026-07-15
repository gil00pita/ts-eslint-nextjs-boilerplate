'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Legend, PolarGrid, Radar, RadarChart } from 'recharts'

export const RadarChartLinesOnly = () => {
  const chart = useChart({
    data: [
      { mac: 100, month: 'January', windows: 30 },
      { mac: 20, month: 'February', windows: 120 },
      { mac: 130, month: 'March', windows: 45 },
      { mac: 40, month: 'May', windows: 140 },
      { mac: 50, month: 'June', windows: 60 },
      { mac: 160, month: 'July', windows: 20 },
    ],
    series: [
      { color: 'teal.solid', name: 'windows' },
      { color: 'orange.solid', name: 'mac' },
    ],
  })

  return (
    <Chart.Root chart={chart} maxW="sm" mx="auto">
      <RadarChart data={chart.data} responsive>
        <PolarGrid stroke={chart.color('border')} />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Radar
            dataKey={chart.key(item.name)}
            fill="none"
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}
