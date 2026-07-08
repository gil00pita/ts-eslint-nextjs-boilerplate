'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, LabelList, Line, LineChart, Tooltip, XAxis } from 'recharts'

export const LineChartWithPointLabel = () => {
  const chart = useChart({
    data: [
      { name: 'Jan', uv: 400 },
      { name: 'Feb', uv: 300 },
      { name: 'Mar', uv: 200 },
      { name: 'Apr', uv: 278 },
      { name: 'May', uv: 189 },
      { name: 'Jun', uv: 239 },
      { name: 'Jul', uv: 349 },
    ],
  })

  return (
    <Chart.Root chart={chart} maxH="md">
      <LineChart data={chart.data} margin={{ left: 40, right: 40, top: 40 }} responsive>
        <CartesianGrid horizontal={false} stroke={chart.color('border')} strokeDasharray="3 3" />
        <XAxis
          dataKey={chart.key('name')}
          stroke={chart.color('border')}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip
          animationDuration={100}
          content={<Chart.Tooltip hideLabel />}
          cursor={{ stroke: chart.color('border') }}
        />
        <Line
          dataKey={chart.key('uv')}
          fill={chart.color('teal.solid')}
          isAnimationActive={false}
          stroke={chart.color('teal.solid')}
          strokeWidth={2}
        >
          <LabelList
            dataKey={chart.key('uv')}
            offset={10}
            position="right"
            style={{
              fill: chart.color('fg'),
              fontWeight: '600',
            }}
          />
        </Line>
      </LineChart>
    </Chart.Root>
  )
}
