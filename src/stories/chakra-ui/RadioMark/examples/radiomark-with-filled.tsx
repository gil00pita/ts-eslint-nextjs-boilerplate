import { HStack, Radiomark } from '@chakra-ui/react'

export const RadiomarkWithFilled = () => {
  return (
    <HStack gap={4}>
      <Radiomark variant="outline" />
      <Radiomark checked variant="outline" />
      <Radiomark filled variant="outline" />
      <Radiomark checked filled variant="outline" />
    </HStack>
  )
}
