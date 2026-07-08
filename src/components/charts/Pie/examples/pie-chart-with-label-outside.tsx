'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Pie, PieChart, Sector } from 'recharts'

export const PieChartWithLabelOutside = () => {
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
        <Pie
          data={chart.data}
          dataKey={chart.key('value')}
          innerRadius={0}
          isAnimationActive={false}
          label={({ index, name }) => {
            const { value } = chart.data[index ?? -1]
            const percent = value / chart.getTotal('value')
            return `${name}: ${(percent * 100).toFixed(1)}%`
          }}
          labelLine={false}
          outerRadius={100}
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
        />
      </PieChart>
    </Chart.Root>
  )
}
