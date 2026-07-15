import { InputGroup, NumberInput } from '@chakra-ui/react'
import { LuArrowRightLeft } from 'react-icons/lu'

export const NumberInputWithScrubber = () => {
  return (
    <NumberInput.Root defaultValue="10" width="200px">
      <NumberInput.Control />
      <InputGroup
        startElement={
          <NumberInput.Scrubber>
            <LuArrowRightLeft />
          </NumberInput.Scrubber>
        }
        startElementProps={{ pointerEvents: 'auto' }}
      >
        <NumberInput.Input />
      </InputGroup>
    </NumberInput.Root>
  )
}
