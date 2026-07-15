'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Pie, PieChart, Sector, Tooltip } from 'recharts'

export const DonutChartWithAnglePadding = () => {
  const chart = useChart({
    data: [
      { color: 'blue.solid', name: 'windows', value: 400 },
      { color: 'orange.solid', name: 'mac', value: 300 },
      { color: 'pink.solid', name: 'linux', value: 300 },
    ],
  })

  return (
    <Chart.Root boxSize="200px" chart={chart} mx="auto">
      <PieChart responsive>
        <Tooltip animationDuration={100} content={<Chart.Tooltip hideLabel />} cursor={false} />
        <Pie
          cornerRadius={4}
          data={chart.data}
          dataKey={chart.key('value')}
          innerRadius={80}
          isAnimationActive={false}
          outerRadius={100}
          paddingAngle={8}
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
        />
      </PieChart>
    </Chart.Root>
  )
}
