import { HStack, RadioCard } from '@chakra-ui/react'

export const RadioCardWithAddon = () => {
  return (
    <RadioCard.Root defaultValue="next">
      <RadioCard.Label>Select framework</RadioCard.Label>
      <HStack align="stretch">
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <RadioCard.ItemContent>
                <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                <RadioCard.ItemDescription>{item.description}</RadioCard.ItemDescription>
              </RadioCard.ItemContent>
              <RadioCard.ItemIndicator />
            </RadioCard.ItemControl>
            <RadioCard.ItemAddon>Some addon text</RadioCard.ItemAddon>
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
