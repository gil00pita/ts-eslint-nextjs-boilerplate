'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Card, ColorSwatch, HStack, Stat } from '@chakra-ui/react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'

export const LineChartComposition = () => {
  const chart = useChart({
    data: [
      { facebookAds: 20, googleAds: 45, month: 'January', organic: 20 },
      { facebookAds: 35, googleAds: 52, month: 'February', organic: 92 },
      { facebookAds: 48, googleAds: 20, month: 'March', organic: 78 },
      { facebookAds: 65, googleAds: 75, month: 'May', organic: 82 },
      { facebookAds: 72, googleAds: 40, month: 'June', organic: 95 },
      { facebookAds: 85, googleAds: 95, month: 'August', organic: 20 },
    ],
    series: [
      { color: 'blue.solid', label: 'Facebook Ads', name: 'facebookAds' },
      { color: 'green.solid', label: 'Organic', name: 'organic' },
      { color: 'pink.solid', label: 'Google Ads', name: 'googleAds' },
    ],
  })

  return (
    <Card.Root maxW="lg">
      <Card.Header>
        <Card.Title>Customers by channel</Card.Title>
      </Card.Header>
      <Card.Body>
        <Chart.Root chart={chart} maxH="8rem">
          <LineChart data={chart.data} responsive>
            <CartesianGrid stroke={chart.color('border')} vertical={false} />
            <XAxis
              axisLine={false}
              dataKey={chart.key('month')}
              stroke={chart.color('border')}
              tickFormatter={(value) => value.slice(0, 3)}
              ticks={[chart.data[0].month, chart.data[chart.data.length - 1].month]}
            />
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

        <HStack gap="2" wrap="wrap">
          {chart.series.map((item) => (
            <Stat.Root key={item.name} size="sm">
              <Stat.Label textStyle="xs">
                <ColorSwatch boxSize="2" value={chart.color(item.color)} />
                {item.label}
              </Stat.Label>
              <Stat.ValueText fontWeight="medium">
                {item.name ? chart.getTotal(item.name) : '-'}
              </Stat.ValueText>
            </Stat.Root>
          ))}
        </HStack>
      </Card.Body>
    </Card.Root>
  )
}
