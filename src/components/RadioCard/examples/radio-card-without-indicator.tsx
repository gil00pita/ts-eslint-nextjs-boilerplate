import { HStack, Icon, RadioCard } from '@chakra-ui/react'
import { RiAppleFill, RiBankCardFill, RiPaypalFill } from 'react-icons/ri'

export const RadioCardWithoutIndicator = () => {
  return (
    <RadioCard.Root
      align="center"
      defaultValue="paypal"
      justify="center"
      maxW="lg"
      orientation="horizontal"
    >
      <RadioCard.Label>Payment method</RadioCard.Label>
      <HStack align="stretch">
        {items.map((item) => (
          <RadioCard.Item key={item.value} value={item.value}>
            <RadioCard.ItemHiddenInput />
            <RadioCard.ItemControl>
              <Icon color="fg.subtle" fontSize="2xl">
                {item.icon}
              </Icon>
              <RadioCard.ItemText ms="-4">{item.title}</RadioCard.ItemText>
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
