import { HStack, RadioCard } from '@chakra-ui/react'
import { LuCheck } from 'react-icons/lu'

export const RadioCardExplorerDemo = () => {
  return (
    <RadioCard.Root defaultValue="next">
      <RadioCard.Label>Select your favorite framework</RadioCard.Label>

      <HStack align="stretch" gap="4" wrap="wrap">
        {items.map((item) => (
          <RadioCard.Item flex="1" key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />

            <RadioCard.ItemControl>
              <RadioCard.ItemContent>
                <RadioCard.ItemText fontWeight="medium">{item.title}</RadioCard.ItemText>
                <RadioCard.ItemDescription color="gray.600" fontSize="sm">
                  {item.description}
                </RadioCard.ItemDescription>
              </RadioCard.ItemContent>

              <RadioCard.ItemIndicator borderWidth="0" checked={<LuCheck />} color="green.500" />
            </RadioCard.ItemControl>

            <RadioCard.ItemAddon color="gray.500" fontSize="xs">
              {item.addon}
            </RadioCard.ItemAddon>
          </RadioCard.Item>
        ))}
      </HStack>
    </RadioCard.Root>
  )
}

const items = [
  {
    addon: 'Most popular',
    description: 'Great for full-stack React apps',
    title: 'Next.js',
    value: 'next',
  },
  {
    addon: 'Super fast dev server',
    description: 'Fast and modern build tool for SPAs',
    title: 'Vite',
    value: 'vite',
  },
  {
    addon: 'Great for blogs/docs',
    description: 'Perfect for content-driven static sites',
    title: 'Astro',
    value: 'astro',
  },
]
