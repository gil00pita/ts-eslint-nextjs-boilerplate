import { NumberInput } from '@chakra-ui/react'

export const NumberInputWithDisabled = () => {
  return (
    <NumberInput.Root defaultValue="10" disabled width="200px">
      <NumberInput.Control />
      <NumberInput.Input />
    </NumberInput.Root>
  )
}
