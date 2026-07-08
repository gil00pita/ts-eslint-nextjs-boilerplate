import { Center, For, Stack } from '@chakra-ui/react'

export const TokensFocusRing = () => {
  return (
    <Stack gap="4">
      <For each={['inside', 'outside', 'mixed']}>
        {(focusRing) => (
          <Center bg="bg" borderWidth="1px" data-focus focusRing={focusRing} h="20">
            {focusRing}
          </Center>
        )}
      </For>
    </Stack>
  )
}
