'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Pie, PieChart, Sector, Tooltip } from 'recharts'

export const DonutChartWithDetachedSegment = () => {
  const chart = useChart({
    data: [
      { color: 'blue.solid', name: 'windows', value: 400 },
      { color: 'orange.solid', name: 'mac', value: 300 },
      { color: 'pink.solid', name: 'linux', value: 300 },
      { color: 'green.solid', name: 'other', value: 200 },
    ],
  })

  return (
    <Chart.Root boxSize="200px" chart={chart} mx="auto">
      <PieChart responsive>
        <Tooltip animationDuration={100} content={<Chart.Tooltip hideLabel />} cursor={false} />
        <Pie
          activeShape={<Sector outerRadius={120} />}
          data={chart.data}
          dataKey={chart.key('value')}
          innerRadius={60}
          isAnimationActive={false}
          nameKey={chart.key('name')}
          outerRadius={100}
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
          strokeWidth={5}
        />
      </PieChart>
    </Chart.Root>
  )
}
