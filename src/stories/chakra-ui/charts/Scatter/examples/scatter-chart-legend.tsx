'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Legend, Scatter, ScatterChart, XAxis, YAxis } from 'recharts'

export const ScatterChartLegend = () => {
  const chart = useChart({
    data: [
      { x: 100, y: 200 },
      { x: 120, y: 100 },
      { x: 170, y: 300 },
      { x: 140, y: 250 },
      { x: 150, y: 400 },
      { x: 110, y: 280 },
    ],
    series: [{ color: 'blue.solid', label: 'Group 1' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <ScatterChart margin={{ bottom: 5, left: 0, right: 30, top: 20 }} responsive>
        <XAxis dataKey={chart.key('x')} stroke={chart.color('border')} type="number" />
        <Legend content={<Chart.Legend />} />
        <YAxis dataKey={chart.key('y')} stroke={chart.color('border')} type="number" />

        {chart.series.map((series, index) => (
          <Scatter
            data={chart.data}
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
