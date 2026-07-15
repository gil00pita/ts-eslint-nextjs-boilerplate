'use client'

import { HStack, RadioCard } from '@chakra-ui/react'
import { useState } from 'react'

export const RadioCardControlled = () => {
  const [value, setValue] = useState<string | null>('next')

  return (
    <RadioCard.Root onValueChange={(e) => setValue(e.value)} value={value}>
      <RadioCard.Label>Select framework</RadioCard.Label>
      <HStack align="stretch">
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
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
  { title: 'Next.js', value: 'next' },
  { title: 'Vite', value: 'vite' },
  { title: 'Astro', value: 'astro' },
]
