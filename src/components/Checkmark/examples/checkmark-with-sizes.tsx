import { Checkmark, For, HStack } from '@chakra-ui/react'

export const CheckmarkWithSizes = () => {
  return (
    <HStack alignItems="center" gap={4}>
      <For each={['xs', 'sm', 'md', 'lg']}>
        {(size) => <Checkmark checked key={size} size={size} />}
      </For>
    </HStack>
  )
}
