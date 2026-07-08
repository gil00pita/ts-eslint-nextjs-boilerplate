import { NumberInput } from '@chakra-ui/react'

export const NumberInputWithMinMax = () => {
  return (
    <NumberInput.Root defaultValue="10" max={50} min={5} width="200px">
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
