'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

export const RadarChartWithFilledGrid = () => {
  const chart = useChart({
    data: [
      { month: 'January', windows: 110 },
      { month: 'February', windows: 130 },
      { month: 'March', windows: 110 },
      { month: 'May', windows: 90 },
      { month: 'June', windows: 75 },
    ],
    series: [{ color: 'teal.solid', name: 'windows' }],
  })

  return (
    <Chart.Root chart={chart} maxW="sm" mx="auto">
      <RadarChart data={chart.data} responsive>
        <PolarGrid stroke="none" style={{ fill: chart.color('teal.solid'), fillOpacity: 0.1 }} />
        <PolarAngleAxis dataKey={chart.key('month')} />
        {chart.series.map((item) => (
          <Radar
            dataKey={chart.key(item.name)}
            dot={{ fillOpacity: 1 }}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            isAnimationActive={false}
            key={item.name}
            name={item.name}
            stroke={chart.color(item.color)}
          />
        ))}
      </RadarChart>
    </Chart.Root>
  )
}
