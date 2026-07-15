import { HStack, IconButton, NumberInput } from '@chakra-ui/react'
import { LuMinus, LuPlus } from 'react-icons/lu'

export const NumberInputWithStepper = () => {
  return (
    <NumberInput.Root defaultValue="3" spinOnPress={false} unstyled>
      <HStack gap="2">
        <NumberInput.DecrementTrigger asChild>
          <IconButton size="sm" variant="outline">
            <LuMinus />
          </IconButton>
        </NumberInput.DecrementTrigger>
        <NumberInput.ValueText fontSize="lg" minW="3ch" textAlign="center" />
        <NumberInput.IncrementTrigger asChild>
          <IconButton size="sm" variant="outline">
            <LuPlus />
          </IconButton>
        </NumberInput.IncrementTrigger>
      </HStack>
    </NumberInput.Root>
  )
}
