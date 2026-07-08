import { Button, HStack } from '@chakra-ui/react'

export const ButtonWithVariants = () => {
  return (
    <HStack gap="6" wrap="wrap">
      <Button variant="solid">Solid</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="surface">Surface</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="plain">Plain</Button>
    </HStack>
  )
}
