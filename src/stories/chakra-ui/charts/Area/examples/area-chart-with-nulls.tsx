'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Box, For, Heading, SimpleGrid } from '@chakra-ui/react'
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from 'recharts'

export const AreaChartWithNulls = () => {
  const chart = useChart({
    data: [
      { month: 'January', sales: 186 },
      { month: 'February', sales: null },
      { month: 'March', sales: 190 },
      { month: 'May', sales: 195 },
      { month: 'June', sales: null },
      { month: 'August', sales: 175 },
      { month: 'October', sales: 180 },
      { month: 'November', sales: 185 },
      { month: 'December', sales: 300 },
    ],
    series: [{ color: 'teal.solid', name: 'sales' }],
  })

  return (
    <SimpleGrid gap="10" minChildWidth="400px">
      <For each={['false', 'true']}>
        {(connectNulls) => (
          <Box key={connectNulls.toString()}>
            <Heading mb="4" size="md">
              {`<Area connectNulls={${connectNulls.toString()}} />`}
            </Heading>
            <Chart.Root chart={chart} maxH="sm">
              <AreaChart data={chart.data} responsive>
                <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
                <XAxis
                  axisLine={false}
                  dataKey={chart.key('month')}
                  tickFormatter={(value) => value.slice(0, 3)}
                  tickLine={false}
                />
                <Tooltip animationDuration={100} content={<Chart.Tooltip />} cursor={false} />
                {chart.series.map((item) => (
                  <Area
                    connectNulls={connectNulls === 'true'}
                    dataKey={chart.key(item.name)}
                    fill={chart.color(item.color)}
                    fillOpacity={0.2}
                    isAnimationActive={false}
                    key={item.name}
                    stackId="a"
                    stroke={chart.color(item.color)}
                  />
                ))}
              </AreaChart>
            </Chart.Root>
          </Box>
        )}
      </For>
    </SimpleGrid>
  )
}
