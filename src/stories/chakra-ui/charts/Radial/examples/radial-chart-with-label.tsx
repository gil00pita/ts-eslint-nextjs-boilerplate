'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { RadialBar, RadialBarChart, Sector } from 'recharts'

export const RadialChartWithLabel = () => {
  const chart = useChart({
    data: [
      { color: 'teal.solid', month: 'January', value: 165 },
      { color: 'purple.solid', month: 'February', value: 190 },
      { color: 'blue.solid', month: 'March', value: 195 },
      { color: 'teal.solid', month: 'May', value: 182 },
    ],
  })

  return (
    <Chart.Root chart={chart} maxW="sm" mx="auto">
      <RadialBarChart
        data={chart.data}
        endAngle={-270}
        innerRadius={30}
        outerRadius={100}
        responsive
        startAngle={90}
      >
        <RadialBar
          background
          dataKey={chart.key('value')}
          isAnimationActive={false}
          label={{
            fill: 'white',
            fontSize: '12px',
            position: 'insideStart',
          }}
          shape={(props: any) => (
            <Sector {...props} fill={chart.color(props.payload!.color)} stroke="none" />
          )}
        />
      </RadialBarChart>
    </Chart.Root>
  )
}
