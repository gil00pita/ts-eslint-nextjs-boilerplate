'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { HStack, VStack } from '@chakra-ui/react'
import { LuArrowUp } from 'react-icons/lu'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

export const LineChartLegendInteraction = () => {
  const chart = useChart({
    data: [
      { linux: 120, mac: 10, month: 'January' },
      { linux: 110, mac: 95, month: 'February' },
      { linux: 125, mac: 87, month: 'March' },
      { linux: 30, mac: 88, month: 'May' },
      { linux: 122, mac: 98, month: 'June' },
      { linux: 15, mac: 90, month: 'August' },
    ],
    series: [
      { color: 'teal.solid', name: 'mac' },
      { color: 'purple.solid', name: 'linux' },
    ],
  })

  return (
    <Container>
      <Chart.Root chart={chart} maxH="sm">
        <LineChart data={chart.data} responsive>
          <CartesianGrid stroke={chart.color('border')} vertical={false} />
          <XAxis
            axisLine={false}
            dataKey={chart.key('month')}
            stroke={chart.color('border')}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis axisLine={false} stroke={chart.color('border')} tickLine={false} tickMargin={10} />
          <Tooltip animationDuration={100} content={<Chart.Tooltip />} cursor={false} />
          <Legend content={<Chart.Legend interaction="hover" />} />
          {chart.series.map((item) => (
            <Line
              dataKey={chart.key(item.name)}
              fill={chart.color('bg')}
              isAnimationActive={false}
              key={item.name}
              opacity={chart.getSeriesOpacity(item.name)}
              stroke={chart.color(item.color)}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </Chart.Root>
    </Container>
  )
}

const Container = (props: React.PropsWithChildren) => {
  const { children } = props
  return (
    <VStack gap="4" pos="relative">
      {children}
      <HStack animation="slide-to-top 1s infinite" bottom="1" color="teal.fg" textStyle="xs">
        Hover on "mac" <LuArrowUp />
      </HStack>
    </VStack>
  )
}
