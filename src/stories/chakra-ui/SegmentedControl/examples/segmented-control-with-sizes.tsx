import { For, SegmentGroup, Stack, Text, VStack } from '@chakra-ui/react'

export const SegmentedControlWithSizes = () => {
  return (
    <Stack align="flex-start" gap="5">
      <For each={['xs', 'sm', 'md', 'lg']}>
        {(size) => (
          <VStack align="flex-start" key={size}>
            <SegmentGroup.Root defaultValue="React" size={size}>
              <SegmentGroup.Indicator />
              <SegmentGroup.Items items={['React', 'Vue', 'Solid']} />
            </SegmentGroup.Root>
            <Text>size = {size}</Text>
          </VStack>
        )}
      </For>
    </Stack>
  )
}
