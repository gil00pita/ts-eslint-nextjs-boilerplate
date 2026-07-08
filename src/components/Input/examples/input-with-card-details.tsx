'use client'

import { Box, Group, Input, InputGroup, Show } from '@chakra-ui/react'
import { LuCreditCard } from 'react-icons/lu'
import usePaymentInputs from 'react-payment-inputs/es/usePaymentInputs.js'
import cardImages, { type CardImages } from 'react-payment-inputs/images'

const images = cardImages as unknown as CardImages

const CardImage = (props: ReturnType<typeof usePaymentInputs>) => {
  const { getCardImageProps, meta } = props
  return (
    <Show fallback={<LuCreditCard aria-hidden="true" size={16} />} when={meta.cardType}>
      <svg {...getCardImageProps({ images })} />
    </Show>
  )
}

export const InputWithCardDetails = () => {
  const payment = usePaymentInputs()
  return (
    <Box spaceY="-1px">
      <InputGroup endElement={<CardImage {...payment} />} zIndex={{ _focusWithin: '1' }}>
        <Input roundedBottom="0" {...payment.getCardNumberProps()} />
      </InputGroup>
      <Group attached w="full">
        <Input roundedTopLeft="0" {...payment.getExpiryDateProps()} />
        <Input roundedTopRight="0" {...payment.getCVCProps()} />
      </Group>
    </Box>
  )
}
