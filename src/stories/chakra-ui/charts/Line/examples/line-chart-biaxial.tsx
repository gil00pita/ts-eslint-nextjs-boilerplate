'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { CartesianGrid, Label, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export const LineChartBiaxial = () => {
  const chart = useChart({
    data: [
      { mac: 20, month: 'January', windows: 186 },
      { mac: 45, month: 'February', windows: 165 },
      { mac: 37, month: 'March', windows: 190 },
      { mac: 28, month: 'May', windows: 195 },
      { mac: 48, month: 'June', windows: 182 },
      { mac: 30, month: 'August', windows: 175 },
      { mac: 26, month: 'October', windows: 180 },
      { mac: 41, month: 'November', windows: 185 },
    ],
    series: [
      { color: 'teal.solid', name: 'windows', yAxisId: 'left' },
      { color: 'purple.solid', name: 'mac', yAxisId: 'right' },
    ],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <LineChart data={chart.data} margin={{ bottom: 20, left: 20, right: 20, top: 20 }} responsive>
        <CartesianGrid stroke={chart.color('border')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          stroke={chart.color('border')}
          tickFormatter={(value) => value.slice(0, 3)}
        >
          <Label position="bottom" value="Month" />
        </XAxis>
        <YAxis
          axisLine={false}
          dataKey={chart.key('windows')}
          stroke={chart.color('border')}
          tickLine={false}
          tickMargin={10}
          yAxisId="left"
        >
          <Label angle={-90} offset={-10} position="left" value="Windows" />
        </YAxis>
        <YAxis
          axisLine={false}
          dataKey={chart.key('mac')}
          orientation="right"
          stroke={chart.color('border')}
          tickLine={false}
          tickMargin={10}
          yAxisId="right"
        >
          <Label angle={90} offset={-10} position="right" value="Mac" />
        </YAxis>
        <Tooltip
          animationDuration={100}
          content={<Chart.Tooltip />}
          cursor={{ stroke: chart.color('border') }}
        />
        <Legend
          align="right"
          content={<Chart.Legend />}
          verticalAlign="top"
          wrapperStyle={{ marginRight: 20, marginTop: -20 }}
        />
        {chart.series.map((item) => (
          <Line
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            isAnimationActive={false}
            key={item.name}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            yAxisId={item.yAxisId}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}
