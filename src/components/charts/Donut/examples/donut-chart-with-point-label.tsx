'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Pie, PieChart, Sector, Tooltip } from 'recharts'

export const DonutChartWithPointLabel = () => {
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
      <PieChart margin={{ bottom: 0, left: 40, right: 0, top: 0 }} responsive>
        <Tooltip animationDuration={100} content={<Chart.Tooltip hideLabel />} cursor={false} />
        <Pie
          data={chart.data}
          dataKey={chart.key('value')}
          innerRadius={80}
          isAnimationActive={false}
          label={{
            fill: chart.color('fg.muted'),
          }}
          labelLine={{ strokeWidth: 1 }}
          nameKey="name"
          outerRadius={100}
          shape={(props) => (
            <Sector {...props} fill={chart.color(props.payload!.color)} strokeWidth={2} />
          )}
        />
      </PieChart>
    </Chart.Root>
  )
}
