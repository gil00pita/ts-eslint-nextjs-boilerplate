import { HStack, Icon, RadioCard } from '@chakra-ui/react'
import { LuClock, LuDollarSign, LuTrendingUp } from 'react-icons/lu'

export const RadioCardCentered = () => {
  return (
    <RadioCard.Root align="center" defaultValue="next" orientation="vertical">
      <RadioCard.Label>Select contract type</RadioCard.Label>
      <HStack align="stretch">
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <Icon color="fg.muted" fontSize="2xl" mb="2">
                {item.icon}
              </Icon>
              <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      </HStack>
    </RadioCard.Root>
  )
}

const items = [
  { icon: <LuDollarSign />, title: 'Fixed Rate', value: 'fixed' },
  { icon: <LuTrendingUp />, title: 'Milestone', value: 'milestone' },
  { icon: <LuClock />, title: 'Hourly', value: 'hourly' },
]
