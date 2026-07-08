'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Area, AreaChart } from 'recharts'

export const SparklineWithGradient = () => {
  const chart = useChart({
    data: [
      { value: 10 },
      { value: 16 },
      { value: 19 },
      { value: 15 },
      { value: 12 },
      { value: 15 },
      { value: 10 },
      { value: 18 },
    ],
    series: [{ color: 'teal.solid', name: 'value' }],
  })

  return (
    <Chart.Root chart={chart} height="12" width="28">
      <AreaChart accessibilityLayer data={chart.data} responsive>
        {chart.series.map((item) => (
          <defs key={item.name}>
            <Chart.Gradient
              id={`${item.name}-gradient`}
              stops={[
                { color: item.color, offset: '0%', opacity: 1 },
                { color: item.color, offset: '100%', opacity: 0.01 },
              ]}
            />
          </defs>
        ))}

        {chart.series.map((item) => (
          <Area
            dataKey={chart.key(item.name)}
            fill={`url(#${item.name}-gradient)`}
            isAnimationActive={false}
            key={item.name}
            stroke={chart.color(item.color)}
            strokeWidth={2}
            type="natural"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}
