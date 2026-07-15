'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts'

export const ScatterChartMultiple = () => {
  const chart = useChart({
    data: [
      { id: 'group1', x: 100, y: 200 },
      { id: 'group1', x: 120, y: 100 },
      { id: 'group1', x: 170, y: 300 },
      { id: 'group1', x: 140, y: 250 },
      { id: 'group1', x: 150, y: 400 },
      { id: 'group1', x: 110, y: 280 },
      { id: 'group2', x: 200, y: 260 },
      { id: 'group2', x: 240, y: 290 },
      { id: 'group2', x: 190, y: 290 },
      { id: 'group2', x: 198, y: 250 },
      { id: 'group2', x: 180, y: 280 },
      { id: 'group2', x: 210, y: 220 },
    ],
    series: [
      { color: 'blue.solid', label: 'Group 1' },
      { color: 'green.solid', label: 'Group 2' },
    ],
  })

  const groupedData = chart.groupBy('id')

  return (
    <Chart.Root chart={chart} maxH="sm">
      <ScatterChart margin={{ bottom: 5, left: 0, right: 30, top: 20 }} responsive>
        <XAxis
          dataKey={chart.key('x')}
          domain={['dataMin - 10', 'dataMax + 10']}
          stroke={chart.color('border')}
          type="number"
        />
        <YAxis dataKey={chart.key('y')} stroke={chart.color('border')} type="number" />
        <Tooltip content={<Chart.Tooltip hideLabel />} cursor={{ strokeDasharray: '3 3' }} />
        {chart.series.map((series, index) => (
          <Scatter
            data={groupedData[index]}
            fill={chart.color(series.color)}
            isAnimationActive={false}
            key={index}
            name={series.label?.toString()}
          />
        ))}
      </ScatterChart>
    </Chart.Root>
  )
}
