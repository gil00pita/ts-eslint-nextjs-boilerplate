'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { For, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

const curveTypes = [
  'linear',
  'bump',
  'basis',
  'step',
  'stepBefore',
  'stepAfter',
  'natural',
  'monotone',
] as const

export const AreaChartWithTypes = () => {
  const chart = useChart({
    data: [
      { linux: 120, mac: 80, month: 'January', windows: 186 },
      { linux: 110, mac: 95, month: 'February', windows: 165 },
      { linux: 125, mac: 87, month: 'March', windows: 190 },
      { linux: 130, mac: 88, month: 'May', windows: 195 },
      { linux: 122, mac: 98, month: 'June', windows: 182 },
      { linux: 115, mac: 90, month: 'August', windows: 175 },
      { linux: 124, mac: 86, month: 'October', windows: 180 },
      { linux: 126, mac: 91, month: 'November', windows: 185 },
    ],
    series: [
      { color: 'teal.solid', name: 'windows' },
      { color: 'orange.solid', name: 'mac' },
      { color: 'blue.solid', name: 'linux' },
    ],
  })

  return (
    <SimpleGrid gap="10" minChildWidth="400px">
      <For each={curveTypes}>
        {(type) => (
          <Stack gap="4" key={type.toString()}>
            <Text fontWeight="semibold" ms="8" textStyle="sm">
              {`<Area type="${type}" />`}
            </Text>
            <Chart.Root chart={chart} maxH="sm">
              <AreaChart accessibilityLayer data={chart.data} responsive>
                <CartesianGrid stroke={chart.color('border')} vertical={false} />
                <XAxis
                  axisLine={false}
                  dataKey={chart.key('month')}
                  tickFormatter={(value) => value.slice(0, 3)}
                  tickLine={false}
                  tickMargin={8}
                />
                <YAxis axisLine={false} tickLine={false} />
                {chart.series.map((item) => (
                  <Area
                    activeDot={{ fill: chart.color(item.color) }}
                    dataKey={chart.key(item.name)}
                    fill={chart.color(item.color)}
                    fillOpacity={0.8}
                    isAnimationActive={false}
                    key={item.name}
                    stackId="a"
                    stroke={chart.color('white')}
                    strokeWidth={3}
                    type={type}
                  />
                ))}
              </AreaChart>
            </Chart.Root>
          </Stack>
        )}
      </For>
    </SimpleGrid>
  )
}
