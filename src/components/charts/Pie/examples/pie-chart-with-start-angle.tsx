'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Pie, PieChart, Sector, Tooltip } from 'recharts'

export const PieChartWithStartAngle = () => {
  const chart = useChart({
    data: [
      { color: 'blue.solid', name: 'typescript', value: 400 },
      { color: 'orange.solid', name: 'javascript', value: 120 },
      { color: 'pink.solid', name: 'python', value: 300 },
      { color: 'purple.solid', name: 'rust', value: 278 },
    ],
  })

  return (
    <Chart.Root boxSize="320px" chart={chart} mx="auto">
      <PieChart responsive>
        <Tooltip animationDuration={100} content={<Chart.Tooltip hideLabel />} cursor={false} />
        <Pie
          data={chart.data}
          dataKey={chart.key('value')}
          endAngle={0}
          isAnimationActive={false}
          nameKey="name"
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
          startAngle={180}
        />
      </PieChart>
    </Chart.Root>
  )
}
