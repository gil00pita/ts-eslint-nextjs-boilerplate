import { Circle } from '@chakra-ui/react'
import { LuPhoneForwarded } from 'react-icons/lu'

export const CenterWithCircle = () => {
  return (
    <Circle bg="blue.700" color="white" size="10">
      <LuPhoneForwarded />
    </Circle>
  )
}
