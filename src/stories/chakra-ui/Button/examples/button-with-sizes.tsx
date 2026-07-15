import { Button, HStack } from '@chakra-ui/react'

export const ButtonWithSizes = () => {
  return (
    <HStack gap="6" wrap="wrap">
      <Button size="xs">Button (xs)</Button>
      <Button size="sm">Button (sm)</Button>
      <Button size="md">Button (md)</Button>
      <Button size="lg">Button (lg)</Button>
      <Button size="xl">Button (xl)</Button>
    </HStack>
  )
}
