'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Pie, PieChart, Sector, Tooltip } from 'recharts'

export const PieChartWithTooltip = () => {
  const chart = useChart({
    data: [
      { color: 'blue.solid', name: 'windows', value: 400 },
      { color: 'orange.solid', name: 'mac', value: 300 },
      { color: 'pink.solid', name: 'linux', value: 300 },
      { color: 'green.solid', name: 'other', value: 200 },
    ],
  })

  return (
    <Chart.Root boxSize="200px" chart={chart}>
      <PieChart responsive>
        <Pie
          data={chart.data}
          dataKey={chart.key('value')}
          isAnimationActive={false}
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
        />
        <Tooltip animationDuration={100} content={<Chart.Tooltip hideLabel />} cursor={false} />
      </PieChart>
    </Chart.Root>
  )
}
