'use client'

import { InputGroup, NumberInput, Text, VStack } from '@chakra-ui/react'
import { LuArrowRightLeft } from 'react-icons/lu'

export const NumberInputExplorerDemo = () => {
  return (
    <VStack align="stretch" gap="8" maxW="400px" mx="auto" p="8">
      <VStack align="start" gap="1">
        <Text fontSize="lg" fontWeight="bold">
          Adjust a Number
        </Text>
        <Text color="gray.600" fontSize="sm">
          Try using the arrows, typing directly, or dragging the scrubber to change the value.
        </Text>
      </VStack>

      <NumberInput.Root defaultValue="10" max={100} min={1} width="full">
        <VStack align="start" gap="2" w="full">
          <NumberInput.Label color="gray.700" fontSize="sm" fontWeight="medium">
            Quantity
          </NumberInput.Label>

          <InputGroup
            startElement={
              <NumberInput.Scrubber cursor="ew-resize">
                <LuArrowRightLeft />
              </NumberInput.Scrubber>
            }
            startElementProps={{ pointerEvents: 'auto' }}
          >
            <>
              <NumberInput.Input pl="10" />
              <NumberInput.Control>
                <NumberInput.IncrementTrigger />
                <NumberInput.DecrementTrigger />
              </NumberInput.Control>
            </>
          </InputGroup>

          <Text color="gray.500" fontSize="xs">
            Enter a number between 1 and 100.
          </Text>
        </VStack>
      </NumberInput.Root>
    </VStack>
  )
}
