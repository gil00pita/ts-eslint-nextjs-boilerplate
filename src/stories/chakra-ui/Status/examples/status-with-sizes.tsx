import { For, HStack, Stack, Status } from '@chakra-ui/react'

export const StatusWithSizes = () => {
  return (
    <Stack align="flex-start" gap="2">
      <For each={['sm', 'md', 'lg']}>
        {(size) => (
          <HStack gap="10" key={size} px="4">
            <Status.Root colorPalette="orange" size={size} width="100px">
              <Status.Indicator />
              In Review
            </Status.Root>
            <Status.Root colorPalette="red" size={size} width="100px">
              <Status.Indicator />
              Error
            </Status.Root>
            <Status.Root colorPalette="green" size={size} width="100px">
              <Status.Indicator />
              Approved
            </Status.Root>
          </HStack>
        )}
      </For>
    </Stack>
  )
}
