'use client'

import { HStack, Icon, RadioCard, useBreakpointValue } from '@chakra-ui/react'
import { RiAppleFill, RiBankCardFill, RiPaypalFill } from 'react-icons/ri'

export const RadioCardWithResponsiveOrientation = () => {
  const orientation = useBreakpointValue<'horizontal' | 'vertical'>({
    base: 'horizontal',
    md: 'vertical',
  })

  return (
    <RadioCard.Root align="center" defaultValue="paypal" maxW="400px" orientation={orientation}>
      <RadioCard.Label>Payment method</RadioCard.Label>
      <HStack>
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <Icon color="fg.muted" fontSize="2xl">
                {item.icon}
              </Icon>
              <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
            </RadioCard.ItemControl>
          </RadioCard.Item>
        ))}
      </HStack>
    </RadioCard.Root>
  )
}

const items = [
  { icon: <RiPaypalFill />, title: 'Paypal', value: 'paypal' },
  { icon: <RiAppleFill />, title: 'Apple Pay', value: 'apple-pay' },
  { icon: <RiBankCardFill />, title: 'Card', value: 'card' },
]
