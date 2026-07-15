'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

export const BarChartRange = () => {
  const chart = useChart({
    data: [
      { name: 'UK', value: [10, 20] },
      { name: 'US', value: [15, 25] },
      { name: 'EU', value: [5, 18] },
      { name: 'JP', value: [12, 30] },
    ],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <BarChart
        barSize={100}
        data={chart.data}
        margin={{ bottom: 5, left: 20, right: 30, top: 20 }}
        responsive
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis axisLine={false} dataKey={chart.key('name')} tickLine={false} />
        <YAxis axisLine={false} domain={[0, 'dataMax + 5']} tickLine={false} />
        <Bar dataKey={chart.key('value')} fill={chart.color('teal.solid')} tooltipType="none" />
      </BarChart>
    </Chart.Root>
  )
}
