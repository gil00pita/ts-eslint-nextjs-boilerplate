import { Stack, Textarea } from '@chakra-ui/react'

export const TextareaWithSizes = () => {
  return (
    <Stack gap="4">
      <Textarea placeholder="XSmall size" size="xs" />
      <Textarea placeholder="Small size" size="sm" />
      <Textarea placeholder="Medium size" size="md" />
      <Textarea placeholder="Large size" size="lg" />
      <Textarea placeholder="XLarge size" size="xl" />
    </Stack>
  )
}
