'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Card, SegmentGroup } from '@chakra-ui/react'
import * as React from 'react'
import { Bar, BarChart, XAxis } from 'recharts'

type CurrentKey = 'windows' | 'mac' | 'linux'

export const BarChartComposition = () => {
  const [currentKey, setCurrentKey] = React.useState<CurrentKey>('windows')

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
      { color: 'purple.solid', name: 'mac' },
      { color: 'blue.solid', name: 'linux' },
    ],
  })

  const totals = chart.data.reduce(
    (acc, item) => {
      return {
        linux: acc.linux + item.linux,
        mac: acc.mac + item.mac,
        windows: acc.windows + item.windows,
      }
    },
    { linux: 0, mac: 0, windows: 0 }
  )

  const series = chart.getSeries({ name: currentKey })

  const formatNumber = chart.formatNumber({
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    style: 'decimal',
  })

  return (
    <Card.Root maxW="md">
      <Card.Header alignItems="flex-start">
        <Card.Title>OS Downloads</Card.Title>
        <SegmentGroup.Root
          onValueChange={(e) => setCurrentKey(e.value as CurrentKey)}
          size="xs"
          value={currentKey}
        >
          <SegmentGroup.Indicator />
          <SegmentGroup.Items
            items={[
              {
                label: `Windows (${formatNumber(totals.windows)})`,
                value: 'windows',
              },
              { label: `Mac (${formatNumber(totals.mac)})`, value: 'mac' },
              {
                label: `Linux (${formatNumber(totals.linux)})`,
                value: 'linux',
              },
            ]}
          />
        </SegmentGroup.Root>
      </Card.Header>
      <Card.Body>
        <Chart.Root chart={chart} height="10rem">
          <BarChart data={chart.data} responsive>
            <XAxis
              axisLine={false}
              dataKey={chart.key('month')}
              tickFormatter={(value) => value.slice(0, 3)}
              tickLine={false}
            />
            <Bar dataKey={chart.key(currentKey)} fill={chart.color(series?.color)} />
          </BarChart>
        </Chart.Root>
      </Card.Body>
    </Card.Root>
  )
}
