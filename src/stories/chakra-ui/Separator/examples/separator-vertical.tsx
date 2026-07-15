import { HStack, Separator, Text } from '@chakra-ui/react'

export const SeparatorVertical = () => {
  return (
    <HStack gap="4">
      <Text>First</Text>
      <Separator height="4" orientation="vertical" />
      <Text>Second</Text>
    </HStack>
  )
}
