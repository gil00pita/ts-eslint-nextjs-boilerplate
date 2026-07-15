'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, BarChart, CartesianGrid, LabelList, Rectangle } from 'recharts'

export const BarChartFillWithValue = () => {
  const chart = useChart({
    data: [
      { name: 'Page A', views: 400 },
      { name: 'Page B', views: -300 },
      { name: 'Page C', views: -200 },
      { name: 'Page D', views: 278 },
      { name: 'Page E', views: -189 },
      { name: 'Page F', views: 239 },
      { name: 'Page G', views: 349 },
    ],
    series: [{ color: 'teal.solid', name: 'views' }],
  })

  return (
    <Chart.Root chart={chart} maxH="sm">
      <BarChart data={chart.data} margin={{ top: 30 }} responsive>
        <CartesianGrid stroke={chart.color('border.muted')} vertical={false} />
        {chart.series.map((item) => (
          <Bar
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            isAnimationActive={false}
            key={item.name}
            radius={4}
            shape={(props) => (
              <Rectangle
                {...props}
                fill={chart.color(props.payload.views > 0 ? 'green.solid' : 'red.solid')}
              />
            )}
          >
            <LabelList
              dataKey={chart.key('views')}
              offset={10}
              position="top"
              style={{ fontWeight: '500' }}
            />
          </Bar>
        ))}
      </BarChart>
    </Chart.Root>
  )
}
