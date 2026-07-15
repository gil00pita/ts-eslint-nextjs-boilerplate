'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Scatter, ScatterChart, XAxis, YAxis } from 'recharts'

export const ScatterChartBasic = () => {
  const chart = useChart({
    data: [
      { sales: 215, temperature: 14.2 },
      { sales: 325, temperature: 16.4 },
      { sales: 185, temperature: 11.9 },
      { sales: 332, temperature: 15.2 },
      { sales: 406, temperature: 18.5 },
      { sales: 522, temperature: 22.1 },
      { sales: 412, temperature: 19.4 },
      { sales: 614, temperature: 25.1 },
      { sales: 544, temperature: 23.4 },
      { sales: 421, temperature: 18.1 },
      { sales: 445, temperature: 22.6 },
      { sales: 408, temperature: 17.2 },
    ],
    series: [{ color: 'teal.solid', name: 'sales' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <ScatterChart responsive>
        <XAxis
          dataKey={chart.key('temperature')}
          domain={[10, 'dataMax + 3']}
          stroke={chart.color('border')}
          tickFormatter={(value) => `${value}°C`}
          type="number"
        />
        <YAxis dataKey={chart.key('sales')} stroke={chart.color('border')} type="number" />
        {chart.series.map((series, index) => (
          <Scatter
            data={chart.data}
            fill={chart.color(series.color)}
            isAnimationActive={false}
            key={index}
            name={series.name?.toString()}
          />
        ))}
      </ScatterChart>
    </Chart.Root>
  )
}
