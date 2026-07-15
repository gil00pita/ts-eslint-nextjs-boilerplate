'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { amt: 2400, name: 'Product A', pv: 2400, uv: 4000 },
  { amt: 2210, name: 'Product B', pv: 1398, uv: 3000 },
  { amt: 2290, name: 'Product C', pv: 9800, uv: -1000 },
  { amt: 2000, name: 'Product D', pv: 3908, uv: 500 },
  { amt: 2181, name: 'Product E', pv: 4800, uv: -2000 },
  { amt: 2500, name: 'Product F', pv: 3800, uv: -250 },
  { amt: 2100, name: 'Product G', pv: 4300, uv: 3490 },
]

const gradientOffset = () => {
  const max = Math.max(...data.map((i) => i.uv))
  const min = Math.min(...data.map((i) => i.uv))
  if (max <= 0) return 0
  if (min >= 0) return 1
  return max / (max - min)
}

const offset = gradientOffset()

export const AreaChartFillWithValue = () => {
  const chart = useChart({
    data,
    series: [
      { color: 'teal.solid', name: 'uv' },
      { color: 'purple.solid', name: 'pv' },
    ],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <AreaChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border')} strokeDasharray="3 3" />
        <XAxis
          axisLine={false}
          dataKey={chart.key('name')}
          tickFormatter={(value) => value.replace('Product ', '')}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          tickFormatter={chart.formatNumber({
            currency: 'USD',
            currencyDisplay: 'narrowSymbol',
            notation: 'compact',
            style: 'currency',
          })}
          tickLine={false}
        />
        <Tooltip animationDuration={100} content={<Chart.Tooltip />} cursor={false} />
        <defs>
          <Chart.Gradient
            id="uv-gradient"
            stops={[
              { color: 'teal.solid', offset, opacity: 1 },
              { color: 'red.solid', offset, opacity: 1 },
            ]}
          />
        </defs>
        <Area
          dataKey={chart.key('uv')}
          fill="url(#uv-gradient)"
          fillOpacity={0.2}
          isAnimationActive={false}
          stroke={chart.color('gray.solid')}
          type="monotone"
        />
      </AreaChart>
    </Chart.Root>
  )
}
