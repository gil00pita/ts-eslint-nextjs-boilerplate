import { HStack, RadioCard } from '@chakra-ui/react'
import { LuCheck } from 'react-icons/lu'

export const RadioCardWithCustomIndicator = () => {
  return (
    <RadioCard.Root defaultValue="next">
      <RadioCard.Label>Select framework</RadioCard.Label>
      <HStack align="stretch">
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
              <RadioCard.ItemIndicator borderWidth="0" checked={<LuCheck />} color="fg" />
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      </HStack>
    </RadioCard.Root>
  )
}

const items = [
  { description: 'Best for apps', title: 'Next.js', value: 'next' },
  { description: 'Best for SPAs', title: 'Vite', value: 'vite' },
  { description: 'Best for static sites', title: 'Astro', value: 'astro' },
]
