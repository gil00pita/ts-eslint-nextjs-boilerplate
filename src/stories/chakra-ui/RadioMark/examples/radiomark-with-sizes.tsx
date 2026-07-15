import { For, HStack, Radiomark } from '@chakra-ui/react'

export const RadiomarkWithSizes = () => {
  return (
    <HStack alignItems="center" gap={4}>
      <For each={['xs', 'sm', 'md', 'lg']}>
        {(size) => <Radiomark checked key={size} size={size} />}
      </For>
    </HStack>
  )
}
