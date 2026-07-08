'use client'

import type { PieLabelRenderProps } from 'recharts'

import { Chart, useChart } from '@chakra-ui/charts'
import { Pie, PieChart, Sector, Tooltip } from 'recharts'

interface DataItem extends Record<string, unknown> {
  name: string
  value: number
  color: string
}

const rawData: DataItem[] = [
  { color: 'blue.solid', name: 'windows', value: 400 },
  { color: 'orange.solid', name: 'mac', value: 300 },
  { color: 'pink.solid', name: 'linux', value: 150 },
  { color: 'purple.solid', name: 'chrome', value: 80 },
  { color: 'red.solid', name: 'firefox', value: 60 },
  { color: 'yellow.solid', name: 'safari', value: 40 },
  { color: 'cyan.solid', name: 'edge', value: 30 },
  { color: 'teal.solid', name: 'opera', value: 20 },
]

const threshold = 100

// Group items with value < 100 into "Other"
const data = rawData.reduce<DataItem[]>((acc, item) => {
  if (item.value >= threshold) {
    acc.push(item)
  } else {
    const otherIndex = acc.findIndex((i) => i.name === 'Other')
    if (otherIndex === -1) {
      acc.push({ color: 'gray.emphasized', name: 'Other', value: item.value })
    } else {
      acc[otherIndex].value += item.value
    }
  }
  return acc
}, [])

export const DonutChartWithOtherLabel = () => {
  const chart = useChart({ data: data })

  const label = (entry: PieLabelRenderProps) => {
    const percent = chart.getValuePercent('value', entry.value as number)
    return `${entry.name} (${percent.toFixed(1)}%)`
  }

  return (
    <Chart.Root aspectRatio="square" chart={chart} maxW="sm" mx="auto">
      <PieChart responsive>
        <Tooltip animationDuration={100} content={<Chart.Tooltip hideLabel />} cursor={false} />
        <Pie
          data={chart.data}
          dataKey={chart.key('value')}
          innerRadius={60}
          isAnimationActive={false}
          label={label}
          labelLine={{ strokeWidth: 1 }}
          nameKey={chart.key('name')}
          outerRadius={100}
          shape={(props) => <Sector {...props} fill={chart.color(props.payload!.color)} />}
        />
      </PieChart>
    </Chart.Root>
  )
}
