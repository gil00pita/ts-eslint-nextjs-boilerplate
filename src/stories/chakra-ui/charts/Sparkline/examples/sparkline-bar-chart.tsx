'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, BarChart, Rectangle } from 'recharts'

export const SparklineBarChart = () => {
  const chart = useChart({
    data: [
      { fill: 'teal.solid', value: 10 },
      { fill: 'green.solid', value: 16 },
      { fill: 'teal.solid', value: 19 },
      { fill: 'green.solid', value: 15 },
      { fill: 'teal.solid', value: 12 },
      { fill: 'teal.solid', value: 15 },
      { fill: 'teal.solid', value: 10 },
      { fill: 'teal.solid', value: 18 },
    ],
  })

  return (
    <Chart.Root chart={chart} height="12" width="28">
      <BarChart barSize={8} data={chart.data} responsive>
        <Bar
          dataKey={chart.key('value')}
          fill={chart.color('teal.solid')}
          isAnimationActive={false}
          shape={(props) => <Rectangle {...props} fill={chart.color(props.payload!.fill)} />}
          stroke=""
        />
      </BarChart>
    </Chart.Root>
  )
}
