'use client'

import { Chart, useChart } from '@chakra-ui/charts'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'

const data = [
  { avatar: 'https://i.pravatar.cc/50?img=1', name: 'Alice', value: 400 },
  { avatar: 'https://i.pravatar.cc/50?img=2', name: 'Bob', value: 300 },
  { avatar: 'https://i.pravatar.cc/50?img=5', name: 'Charlie', value: 200 },
  { avatar: 'https://i.pravatar.cc/50?img=4', name: 'David', value: 278 },
]

interface AvatarTickProps {
  x: number
  y: number
  index: number
}

const AvatarTicks = (props: Partial<AvatarTickProps>) => {
  const { index, x, y } = props as AvatarTickProps
  const avatarUrl = data[index].avatar
  return (
    <foreignObject height={50} width={50} x={x - 15} y={y}>
      <img alt="avatar" src={avatarUrl} style={{ borderRadius: '50%', height: 30, width: 30 }} />
    </foreignObject>
  )
}

export const BarChartWithAvatarTicks = () => {
  const chart = useChart({
    data,
    series: [{ color: 'teal.solid', name: 'value' }],
  })
  return (
    <Chart.Root chart={chart} maxH="sm">
      <BarChart data={chart.data} margin={{ bottom: 20 }} responsive>
        <XAxis dataKey="name" stroke={chart.color('border.emphasized')} tick={<AvatarTicks />} />
        <YAxis stroke={chart.color('border.emphasized')} />
        {chart.series.map((item) => (
          <Bar dataKey={chart.key(item.name)} fill={chart.color(item.color)} key={item.name} />
        ))}
      </BarChart>
    </Chart.Root>
  )
}
