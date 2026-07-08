'use client'

import type { TooltipContentProps } from 'recharts'

import { Chart, useChart } from '@chakra-ui/charts'
import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

function CustomTooltip(props: Partial<TooltipContentProps<string, string>>) {
  const { active, label, payload } = props
  if (!active || !payload || payload.length === 0) return null
  return (
    <Box bg="teal.subtle" p="3" rounded="sm" w="40">
      <HStack>
        <span>{label} Customers</span>
      </HStack>
      <Stack>
        {payload.map((item) => (
          <HStack key={item.name}>
            <Box bg={item.color} boxSize="2" />
            <Text textStyle="xl">{item.value}</Text>
          </HStack>
        ))}
      </Stack>
    </Box>
  )
}

export const LineChartCustomTooltip = () => {
  const chart = useChart({
    data: [
      { Customers: 10, month: 'January' },
      { Customers: 95, month: 'February' },
      { Customers: 87, month: 'March' },
      { Customers: 88, month: 'May' },
      { Customers: 65, month: 'June' },
      { Customers: 90, month: 'August' },
    ],
    series: [{ color: 'teal.solid', name: 'Customers' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <LineChart data={chart.data} responsive>
        <CartesianGrid stroke={chart.color('border')} vertical={false} />
        <XAxis
          axisLine={false}
          dataKey={chart.key('month')}
          label={{ position: 'bottom', value: 'Month' }}
          stroke={chart.color('border')}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          axisLine={false}
          label={{ angle: -90, position: 'left', value: 'Customers' }}
          stroke={chart.color('border')}
          tickLine={false}
          tickMargin={10}
        />
        <Tooltip animationDuration={100} content={<CustomTooltip />} cursor={false} />
        {chart.series.map((item) => (
          <Line
            dataKey={chart.key(item.name)}
            dot={false}
            isAnimationActive={false}
            key={item.name}
            stroke={chart.color(item.color)}
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </Chart.Root>
  )
}
