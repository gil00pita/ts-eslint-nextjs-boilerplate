import { HStack, RadioGroup } from '@chakra-ui/react'

export const RadioDisabled = () => {
  return (
    <RadioGroup.Root defaultValue="2">
      <HStack gap="6">
        {items.map((item) => (
          <RadioGroup.Item disabled={item.disabled} key={item.value} value={item.value}>
            <RadioGroup.ItemHiddenInput />
            <RadioGroup.ItemIndicator />
            <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </HStack>
    </RadioGroup.Root>
  )
}

const items = [
  { label: 'Option 1', value: '1' },
  { disabled: true, label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]
