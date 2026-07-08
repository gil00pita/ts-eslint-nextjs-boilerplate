import { NumberInput, Stack } from '@chakra-ui/react'

export const NumberInputWithFormatOptions = () => {
  return (
    <Stack gap="5" maxW="200px">
      <NumberInput.Root
        defaultValue="5"
        formatOptions={{
          style: 'percent',
        }}
        step={0.01}
      >
        <NumberInput.Control />
        <NumberInput.Input />
      </NumberInput.Root>

      <NumberInput.Root
        defaultValue="45"
        formatOptions={{
          currency: 'EUR',
          currencyDisplay: 'code',
          currencySign: 'accounting',
          style: 'currency',
        }}
      >
        <NumberInput.Control />
        <NumberInput.Input />
      </NumberInput.Root>

      <NumberInput.Root
        defaultValue="4"
        formatOptions={{
          style: 'unit',
          unit: 'inch',
          unitDisplay: 'long',
        }}
      >
        <NumberInput.Control />
        <NumberInput.Input />
      </NumberInput.Root>
    </Stack>
  )
}
