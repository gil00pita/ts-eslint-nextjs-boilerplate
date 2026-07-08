'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts'

export const RadarChartWithCircleGrid = () => {
  const chart = useChart({
    data: [
      { month: 'January', windows: 120 },
      { month: 'February', windows: 120 },
      { month: 'March', windows: 80 },
      { month: 'May', windows: 140 },
      { month: 'June', windows: 60 },
    ],
    series: [{ color: 'teal.solid', name: 'windows' }],
  })

  return (
    <Chart.Root chart={chart} maxW="sm" mx="auto">
      <RadarChart data={chart.data} responsive>
        <PolarGrid gridType="circle" stroke={chart.color('border')} />
        <PolarAngleAxis dataKey={chart.key('month')} />
        <PolarRadiusAxis />
        {chart.series.map((item) => (
          <Radar
            dataKey={chart.key(item.name)}
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
