'use client'

import type { CategoricalChartFunc } from 'recharts/types/chart/types'

import { Chart, useChart } from '@chakra-ui/charts'
import { Box, Flex, FormatNumber, HStack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { LuDownload } from 'react-icons/lu'
import { Area, AreaChart, Tooltip } from 'recharts'

export const SparklineWithInteraction = () => {
  const chart = useChart({
    data: [
      { value: 125000 },
      { value: 158000 },
      { value: 189000 },
      { value: 210000 },
      { value: 105000 },
      { value: 278000 },
      { value: 310000 },
      { value: 345000 },
    ],
    series: [{ color: 'teal.solid', name: 'value' }],
  })

  const lastIndex = chart.data.length - 1
  const lastValue = chart.data[lastIndex].value
  const [value, setValue] = useState(lastValue)

  const onMouseMove: CategoricalChartFunc = (state) => {
    const index = state.activeTooltipIndex ?? lastIndex
    const { value = lastValue } = chart.data[index as number]
    setValue(value)
  }

  const onMouseLeave = () => {
    setValue(lastValue)
  }

  return (
    <Flex align="flex-end" maxW="sm">
      <Box flex="1" fontWeight="medium">
        <HStack color="fg.muted" textStyle="sm">
          <LuDownload /> Weekly Downloads
        </HStack>
        <Text mt="2" textStyle="xl">
          <FormatNumber value={value} />
        </Text>
      </Box>
      <Chart.Root chart={chart} flex="1" height="12" width="full">
        <AreaChart
          data={chart.data}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          responsive
        >
          <Tooltip
            content={() => null}
            cursor={{ stroke: chart.color('teal.solid'), strokeWidth: 2 }}
          />
          {chart.series.map((item) => (
            <Area
              activeDot={{ stroke: chart.color('bg') }}
              dataKey={chart.key(item.name)}
              fill={chart.color(item.color)}
              fillOpacity={0.2}
              isAnimationActive={false}
              key={item.name}
              stroke={chart.color(item.color)}
              strokeWidth={2}
            />
          ))}
        </AreaChart>
      </Chart.Root>
    </Flex>
  )
}
