'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { RadialBar, RadialBarChart, Sector, Tooltip } from 'recharts'

export const RadialChartBasic = () => {
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
      <RadialBarChart barSize={20} data={chart.data} endAngle={-270} responsive startAngle={90}>
        <Tooltip content={<Chart.Tooltip nameKey="month" />} cursor={false} />
        <RadialBar
          background
          dataKey={chart.key('value')}
          isAnimationActive={false}
          shape={(props: any) => (
            <Sector {...props} fill={chart.color(props.payload!.color)} stroke="none" />
          )}
        />
      </RadialBarChart>
    </Chart.Root>
  )
}
