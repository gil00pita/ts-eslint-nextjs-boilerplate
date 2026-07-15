import { NumberInput } from '@chakra-ui/react'

export const NumberInputWithMouseWheel = () => {
  return (
    <NumberInput.Root allowMouseWheel defaultValue="10" width="200px">
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
