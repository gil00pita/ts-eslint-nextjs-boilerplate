'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, BarChart, CartesianGrid, ErrorBar, Rectangle, XAxis, YAxis } from 'recharts'

export const BarChartCandlestick = () => {
  const chart = useChart({
    data,
    series: [{ color: 'teal.solid', name: 'open_close' }],
  })

  return (
    <Chart.Root chart={chart} maxH="md">
      <BarChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border.muted')} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('date')}
          tickFormatter={chart.formatDate({ day: '2-digit', month: 'short' })}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          domain={['dataMin - 0.5', 'dataMax + 0.5']}
          orientation="right"
          tickFormatter={chart.formatNumber({ maximumFractionDigits: 1 })}
          tickLine={false}
        />
        <Bar
          barSize={40}
          dataKey={chart.key('open_close')}
          fill={chart.color('teal.solid')}
          isAnimationActive={false}
          shape={(props) => {
            const entry = props.payload
            const fill =
              entry?.open_close[0] > entry?.open_close[1]
                ? chart.color('red.solid')
                : chart.color('green.solid')
            return <Rectangle {...props} fill={fill} />
          }}
        >
          <ErrorBar
            dataKey={(obj) => [
              obj.open_close[0] - obj.high_low[0],
              obj.high_low[1] - obj.open_close[1],
            ]}
            stroke={chart.color('fg')}
            width={2}
          />
        </Bar>
      </BarChart>
    </Chart.Root>
  )
}

const data = [
  {
    date: '2024-01-01',
    high_low: [186.74, 185.19],
    open_close: [185.96, 185.64],
  },
  {
    date: '2024-01-02',
    high_low: [185.15, 182.73],
    open_close: [184.22, 185.14],
  },
  {
    date: '2024-01-03',
    high_low: [184.26, 181.12],
    open_close: [184.22, 181.42],
  },
  {
    date: '2024-01-04',
    high_low: [183.0872, 181.59],
    open_close: [181.99, 182.68],
  },
  {
    date: '2024-01-05',
    high_low: [185.66, 181.5],
    open_close: [182.15, 185.56],
  },
  {
    date: '2024-01-08',
    high_low: [186.01, 183.98],
    open_close: [184.51, 185.8],
  },
  {
    date: '2024-01-09',
    high_low: [187.05, 184.74],
    open_close: [186.19, 185.64],
  },
  {
    date: '2024-01-10',
    high_low: [187.3499, 185.36],
    open_close: [186.09, 186.19],
  },
  {
    date: '2024-01-11',
    high_low: [187.05, 185.08],
    open_close: [186.54, 185.59],
  },
  {
    date: '2024-01-12',
    high_low: [186.565, 184.455],
    open_close: [185.34, 185.92],
  },
]
