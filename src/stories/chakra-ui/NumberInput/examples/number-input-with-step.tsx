import { NumberInput } from '@chakra-ui/react'

export const NumberInputWithStep = () => {
  return (
    <NumberInput.Root defaultValue="2" maxW="200px" step={3}>
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
