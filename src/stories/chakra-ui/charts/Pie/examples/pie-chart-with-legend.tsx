'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Legend, Pie, PieChart, Sector } from 'recharts'

export const PieChartWithLegend = () => {
  const chart = useChart({
    data: [
      { color: 'teal.solid', name: 'windows', value: 400 },
      { color: 'orange.solid', name: 'mac', value: 300 },
      { color: 'blue.solid', name: 'linux', value: 300 },
    ],
  })

  return (
    <Chart.Root boxSize="200px" chart={chart} mx="auto">
      <PieChart responsive>
        <Legend content={<Chart.Legend />} />
        <Pie
          data={chart.data}
          dataKey={chart.key('value')}
          isAnimationActive={false}
          nameKey="name"
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
        />
      </PieChart>
    </Chart.Root>
  )
}
